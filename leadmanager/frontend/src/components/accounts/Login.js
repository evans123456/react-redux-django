import React, { Component, PureComponent } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

export class Login extends Component {
  state = {
    username: "",

    password: "",
  };
  static PropTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("submit: ", this.state);
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Login</legend>
            <div className="form-group row">
              <label for="staticEmail" className="col-sm-2 col-form-label">
                username
              </label>
              <div className="col-sm-10">
                <input
                  type="username"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="username"
                  onChange={this.onChange}
                  value={username}
                  name="username"
                />
              </div>
            </div>

            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <p>
              Dont have an account? <Link to="/register">Register</Link>
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

export default connect(mapStateToProps, { login })(Login);
