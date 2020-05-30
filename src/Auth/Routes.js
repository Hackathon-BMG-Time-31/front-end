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
import Layout from "../Layout";
import HomeSemLogin from "../Views/HomeSemLogin";
import HomeComLogin from "../Views/HomeComLogin";

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
      {isAuthenticated() ? (
        <Layout>
          <PrivateRoute exact path="/" component={HomeComLogin} />
          <PrivateRoute exact path="/home" component={HomeComLogin} />
        </Layout>
      ) : (
        <LayoutSemLogin>
          <Route exact path="/" component={HomeSemLogin} />
          <Route exact path="/home" component={HomeSemLogin} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Cadastro} />
        </LayoutSemLogin>
      )}
    </Switch>
  </Router>
);

export default Routes;
