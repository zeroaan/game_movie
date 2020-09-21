import React, { useState } from "react";
import "./Movies.css";

const movies = [
  {
    id: 1,
    title: "기생충",
    year: 2019,
    poster:
      "https://movie-phinf.pstatic.net/20190528_36/1559024198386YVTEw_JPEG/movie_image.jpg",
  },
  {
    id: 2,
    title: "명량",
    year: 2014,
    poster:
      "https://movie-phinf.pstatic.net/20140721_186/1405911310756Tt2X1_JPEG/movie_image.jpg",
  },
  {
    id: 3,
    title: "테넷",
    year: 2020,
    poster:
      "https://movie-phinf.pstatic.net/20200728_86/15959209130236RePy_JPEG/movie_image.jpg",
  },
  {
    id: 4,
    title: "강철비",
    year: 2017,
    poster:
      "https://movie-phinf.pstatic.net/20171129_216/1511931096509Q0hpu_JPEG/movie_image.jpg",
  },
  {
    id: 5,
    title: "변호인",
    year: 2013,
    poster:
      "https://movie-phinf.pstatic.net/20131203_145/1386034788519v2Vwy_JPEG/movie_image.jpg",
  },
  {
    id: 6,
    title: "국제시장",
    year: 2014,
    poster:
      "https://movie-phinf.pstatic.net/20141124_107/141679124450580TTS_JPEG/movie_image.jpg",
  },
  {
    id: 7,
    title: "베테랑",
    year: 2015,
    poster:
      "https://movie-phinf.pstatic.net/20150622_131/14349365467550iQnC_JPEG/movie_image.jpg",
  },
  {
    id: 8,
    title: "도둑들",
    year: 2012,
    poster:
      "https://movie-phinf.pstatic.net/20120718_209/1342589585791cltsr_JPEG/movie_image.jpg",
  },
  {
    id: 9,
    title: "전우치",
    year: 2009,
    poster:
      "https://movie-phinf.pstatic.net/20111223_249/1324598282916rToPJ_JPEG/movie_image.jpg",
  },
  {
    id: 10,
    title: "검사외전",
    year: 2016,
    poster:
      "https://movie-phinf.pstatic.net/20160112_146/1452573577623EyUOh_JPEG/movie_image.jpg",
  },
];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
let items = shuffle(movies);
let count = 0;

const Movies = () => {
  const [value, setValue] = useState("");
  const [movie, setMovie] = useState(items[count]);

  return (
    <div className="App">
      <h1 className="title">{movie.title}</h1>
      <img
        className="movie__poster"
        src={movie.poster}
        alt={movie.title}
        title={movie.title}
      />
      <form>
        <input
          className="movie__year__input"
          type="text"
          value={value}
          placeholder="개봉년도 입력"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <input
          className="movie__year__button"
          type="submit"
          value="확인"
          onClick={(e) => {
            e.preventDefault();
            if (Number(value) === movie.year) {
              count += 1;
              setMovie(items[count]);
              setValue("");
            } else {
              items = shuffle(movies);
              count = 0;
              setMovie(items[count]);
              setValue("");
            }
          }}
        />
      </form>
      <h2 className="correct_count">
        맞춘 갯수: <b>{count}</b>
      </h2>
    </div>
  );
};

export default Movies;
