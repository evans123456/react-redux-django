import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message }; //converts to json its the same as name:name
    this.props.addLead(lead);
    this.setState({ name: "", email: "", message: "" });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="row">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter name"
              onChange={this.onChange}
              value={name}
              name="name"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your name with anyone.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.onChange}
              value={email}
              name="email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Message</label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
              spellcheck="false"
              onChange={this.onChange}
              value={message}
              name="message"
            ></textarea>

            <small id="emailHelp" className="form-text text-muted">
              Your message is safe with us.
            </small>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addLead })(Form);
