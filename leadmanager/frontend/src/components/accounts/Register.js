import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };
  static PropTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      console.log("Passwords not similar");
    } else {
      console.log("submit: ", this.state);
      const newUser = {
        username,
        email,
        password,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Register</legend>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                username
              </label>
              <div class="col-sm-10">
                <input
                  type="username"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="username"
                  onChange={this.onChange}
                  value={username}
                  name="username"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.onChange}
                value={email}
                name="email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={this.onChange}
                value={password}
                name="password"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password2</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password2"
                onChange={this.onChange}
                value={password2}
                name="password2"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Register
            </button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
