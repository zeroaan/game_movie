import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Search from "./routes/Search";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Search} />
    </HashRouter>
  );
}

export default App;
