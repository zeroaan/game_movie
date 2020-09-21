import React from "react";
import PropTypes from "prop-types";
import "./SearchMovie.css";

function SearchMovie({ id, year, title, poster, rating, director, actor }) {
  return (
    <div className="movie">
      <a href={id} target="__blank">
        <img
          className="movie__poster"
          src={poster}
          alt={title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
          titlt={title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
        ></img>
        <div className="movie__data">
          <h3 className="movie__title">
            {title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
          </h3>
          <p className="movie__rating">
            <span>평점: </span> {rating}/10
          </p>
          <p className="movie__year">
            <span>개봉년도: </span> {year}
          </p>
          <p className="movie__director">
            <span>감독: </span> {director.replace(/\|/g, " ")}
          </p>
          <p className="movie__actor">
            <span>배우: </span> {actor.replace(/\|/g, " ")}
          </p>
        </div>
      </a>
    </div>
  );
}

SearchMovie.propTypes = {
  id: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
};

export default SearchMovie;
