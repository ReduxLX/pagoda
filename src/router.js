import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";

import Home from "./screens/Home";

const routes = [{ path: "/", Component: Home }];

const Routes = () => {
  return (
    <Router>
      <TopNavbar />
      {routes.map(({ path, Component }) => {
        return (
          <Route key={path} path={path} exact>
            <Component />
          </Route>
        );
      })}
    </Router>
  );
};

export default Routes;
