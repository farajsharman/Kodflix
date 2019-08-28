import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "./Gallery";
import Details from "./Details/Details.js";
import NotFound from "./NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/" component={Gallery} />
          <Route exact path="/:showId" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

