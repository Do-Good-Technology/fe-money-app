import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ChooseCategory from "./ChooseCategory";
import ChooseWallet from "./ChooseWallet";

import ChangePassword from "./profile/ChangePassword";
import Settings from "./profile/Settings";
import AccountSettings from "./profile/AccountSettings";

import Addtransaction from "./home/Addtransaction";
import ForgotPassword from "./auth/ForgotPassword";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/forgotPassword">
            <ForgotPassword />
          </Route>
          <Route path="/changePassword">
            <ChangePassword />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/accountSettings">
            <AccountSettings />
          </Route>
          <Route path="/chooseCategory">
            <ChooseCategory />
          </Route>
          <Route path="/chooseWallet">
            <ChooseWallet />
          </Route>
          <Route path="/addtransaction">
            <Addtransaction />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
