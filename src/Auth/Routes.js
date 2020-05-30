import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { isAuthenticated } from "../Auth/Auth";
import Login from "../Views/Login";
import Cadastro from "../Views/Cadastro";
import LayoutSemLogin from "../LayoutSemLogin";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <Router>
    <Switch>
      <LayoutSemLogin>
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
      </LayoutSemLogin>
    </Switch>
  </Router>
);

export default Routes;
