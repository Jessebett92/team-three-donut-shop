import React, { Component } from "react";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.username === "donuts" && this.state.password === "login") {
      this.props.handleSuccessfulLogin();
      this.props.history.push("/");
    } else {
      this.props.handleUnSuccessfulLogin();
    }
  };

  render() {
    return (
      <div className="auth-page-wrapper">
        <div className="auth-welcome">
          <h1>Login to Your Account</h1>
        </div>
        <div className="login-component-wrapper">
          <div className="auth-left">
            <div className="auth-image">
              <img src="https://cdn-image.foodandwine.com/sites/default/files/1519939593/ohio-donut-trail-2-FT-BLOG0318.jpg" />
            </div>
          </div>
          <div className="auth-right">
            <form className="auth-input" onSubmit={this.handleLogin}>
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="Enter Username"
                name="username"
                value={this.state.username}
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
              />
              <button className="btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
