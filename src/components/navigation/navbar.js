import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink as Link
} from "react-router-dom";

import Doughnut from "../../../static/images/logos/large-donut.png";

import Home from "../pages/home";
import Products from "../pages/products";
import Cart from "../pages/cart";
import DoughnutItem from "../pages/doughnut-item";
import Auth from "../pages/auth";

class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="navbar-container">
          <div className="navbar-wrapper">
            <div className="right-side">
              <div className="logo-wrapper">
                <img src={Doughnut} alt="Doughnut Logo" />
              </div>
              <div className="links-wrapper">
                <div className="link-wrapper">
                  <Link exact to="/">
                    HomePage
                  </Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/products">Products</Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/Cart">Cart</Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/auth">Login</Link>
                </div>
              </div>
            </div>

            <div className="left-side">
              <h1>{this.state.loggedInStatus}</h1>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/item-id" component={DoughnutItem} />
            <Route path="/auth" component={Auth} />
            <Route
              path="/auth"
              render={props => (
                <Auth
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
          <div className="footer-wrapper">
            <div className="right-side">
              <div className="logo-wrapper">
                <img src={Doughnut} alt="Doughnut Logo" />
              </div>

              <div className="links-wrapper">
                <div className="link-wrapper">
                  <Link exact to="/">
                    HomePage
                  </Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/products">Products</Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/Cart">Cart</Link>
                </div>
                <div className="link-wrapper">
                  <Link to="/auth">Login</Link>
                </div>
              </div>
            </div>

            <div className="left-side">
              <h1>Social Media</h1>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default NavBar;
