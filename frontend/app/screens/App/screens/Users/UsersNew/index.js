import React from 'react';
import { Socket } from "vendor/phoenix";
import axios from 'axios';
import { connect } from 'react-redux';


const UsersNew = React.createClass({
  getInitialState() {
    return {
      loggedIn: false,
      channel: {}
    }
  },
  handleSubmit(e) {
    e.preventDefault();

    let self = this;

    let username = e.target.username.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    let user = {
      username: username,
      email: email,
      password: password
    }

    axios.post('http://localhost:4000/api/v1/register', {user: user})
      .then(function(response) {
        console.log("Successfully added user!");

        // Clear input values
        document.querySelector(".username").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".password").value = "";
      })
      .catch(function(response) {
        console.log(response);
      });
    
  },
  render () {
    return (
      <div className='container'>
        <h1>New User</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className="form-control username" />
        </div>
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

// export default connect(state => ({
//   currentUser: state.currentUser
// }))(UsersNew);
export default connect()(UsersNew);