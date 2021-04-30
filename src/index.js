import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Works from "./pages/Works";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Works} />
  </Router>,
  document.getElementById("root")
);
