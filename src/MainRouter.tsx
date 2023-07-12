import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Scene from "./components/Scene";

const MainRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/scene" element={Scene} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
