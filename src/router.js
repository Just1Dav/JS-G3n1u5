import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import * as routes from "./common/routes";
import Gaming from "./views/Gaming";
import Ranking from "./views/Ranking";
import StartGame from "./views/StartGame";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={routes.START} component={StartGame} />
      <Route exact path={routes.GAMING} component={Gaming} />
      <Route exact path={routes.RANKING} component={Ranking} />
      <Route component={() => <Redirect to={routes.START} />} />
    </Switch>
  </Router>
);

export default Routes;
