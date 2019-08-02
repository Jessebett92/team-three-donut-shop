import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink as Link
} from "react-router-dom";

import Auth from "./pages/auth";
import NavBar from "./navigation/navbar";

import "../style/main.scss";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
      </div>
    );
  }
}
