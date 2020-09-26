import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import IndexLayout from "Index/Index.js";

import "assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "assets/scss/black-dashboard-pro-react.scss?v=1.1.0";
import "assets/demo/demo.css";


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/index" render={props => <IndexLayout {...props} />} />
      <Redirect from="/" to="/index/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
