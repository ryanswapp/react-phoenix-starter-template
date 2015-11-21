import clone from 'lodash/lang/clone';
import filter from 'lodash/collection/filter';

const Reducers = {}

Reducers.socket = function socket(state=false, action) {
  switch (action.type) {
    case 'INITIATE_SOCKET':
      let newState = action.socket;
      return newState;
    default:
      return state;
  }
}

Reducers.channels = function channels(state={}, action) {
  switch (action.type) {
    case 'FAILED_CHANNEL_JOIN':
      return state;
    case 'JOINED_NEW_USERS_CHANNEL':
      let newState = clone(state, true);
      newState.newUsers = action.channel;
      return newState;
    default:
      return state;
  }
}

Reducers.users = function users(state=[], action) {
	switch (action.type) {
    case 'FETCH_USERS':
      var newState = action.users;
      return newState;
    case 'FAILED_FETCH_USERS':
      return state;
    case 'ADD_USER':
      console.log("Added User!");
      var newState = clone(state, true);
      newState.push(action.user);
      return newState;
    case 'LOG_OUT':
      var newState = [];
      return newState;
    default:
      return state;
  }
}

Reducers.currentUser = function currentUser(state=false, action) {
  switch (action.type) {
    case 'LOG_IN':
      var newState = action.user;

      return newState;
    case 'LOG_OUT':
      var newState = false;
    
      return newState;
    case 'CURRENT_USER':
      var newState = action.user;

      return newState;
    case 'NOT_LOGGED_IN':
      return state;
    default:
      return state;
  }
}

export default Reducers