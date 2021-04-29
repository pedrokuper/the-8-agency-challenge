import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />
  </Router>,
  document.getElementById("root")
);
