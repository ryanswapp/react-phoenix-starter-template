import axios from 'axios'
import store from 'redux/store.js'
import { Socket } from 'vendor/phoenix.js';

const Actions = {}

// SOCKET
Actions.initiateSocket = function initiateSocket() {
  return dispatch => {
    let socket = new Socket("ws://localhost:4000/socket");
    socket.connect();
    console.log("Connected..");
    dispatch({
      type: 'INITIATE_SOCKET',
      socket: socket
    });
  }
};

// USERS
Actions.joinNewUsersChannel = function joinNewUsersChannel(socket) {
  return dispatch => {
    let channel = socket.channel("users:new", {});

    channel.join()
      .receive("ok", chan => {
        dispatch({
          type: 'JOINED_NEW_USERS_CHANNEL',
          channel: channel
        });
      })
      .receive("error", chan => {
        dispatch({
          type: 'FAILED_CHANNEL_JOIN',
          error: "Faild to join New Users Channel"
        });
      });
  }
};

Actions.fetchUsers = function fetchPosts() {
  return dispatch => {
    axios.get('http://localhost:4000/api/v1/users', {
      headers: {'Authorization': localStorage.phoenix_auth_token}
    })
      .then(function (response) {
        if (response.status === 200) {
          dispatch({
            type: 'FETCH_USERS',
            users: response.data.data
          });
        } else {
          dispatch({
            type: 'FAILED_FETCH_USERS',
            error: response
          })
        }
      })
      .catch(function(response) {
        dispatch({
          type: 'FAILED_FETCH_USERS',
          error: response
        })
      });
  }
};

Actions.addUser = function addUser(user) {
  return {
    type: 'ADD_USER',
    user: user
  }
};

Actions.logout = function logout() {
  delete localStorage.phoenix_auth_token;

  return {
    type: 'LOG_OUT'
  }
};

Actions.getCurrentUser = function getCurrentUser() {
  return dispatch => {
    axios.get('http://localhost:4000/api/v1/current_user', {
      headers: {'Authorization': localStorage.phoenix_auth_token},
      params: {
        jwt: localStorage.phoenix_auth_token
      }
    })
      .then(function (response) {
        if (response.status === 200) {
          dispatch({
            type: 'CURRENT_USER',
            user: response.data.data
          })
        } else {
          dispatch({
            type: 'NOT_LOGGED_IN'
          })
        }
      })
      .catch(function(response) {
        console.log("Not logged in.");
        dispatch({
            type: 'NOT_LOGGED_IN'
          })
      });

  }
}


export default Actions;
