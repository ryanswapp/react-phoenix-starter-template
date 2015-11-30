import React from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import axios from 'axios';
import Actions from 'redux/actions.js';

const UserLogin = React.createClass({
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.dispatch(pushState(null, "/"));
    }
  },
  handleSubmit(e) {
    e.preventDefault();

    let self = this;

    let email = e.target.email.value;
    let password = e.target.password.value;

    let session = {
      email: email,
      password: password
    }

    axios.post('http://localhost:4000/api/v1/login', {session: session})
      .then(function(response) {
        if (response.status === 201) {
          // Save new JWT to localStorage
          localStorage.phoenix_auth_token = response.data.jwt;
          self.props.dispatch(Actions.getCurrentUser());

          // Route to home page
          self.props.dispatch(pushState(null, '/'));
        } else {
          console.log("Failed login...");
          console.log(response);
        }
      })
      .catch(function(response) {
        console.log("Failed login...");
        console.log(response);
      });
  },
  render () {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="form-control email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control password" />
          </div>
          <input type="submit" className="btn btn-default" />                   
        </form>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return { 
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(UserLogin);