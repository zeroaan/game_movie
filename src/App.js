import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Search from "./routes/Search";
import Movies from "./routes/Movies";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Search} />
      <Route path="/movies" component={Movies} />
    </HashRouter>
  );
}

export default App;
