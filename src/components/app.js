import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "./pages/auth";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Donut Shop</h1>
      </div>
    );
  }
}
