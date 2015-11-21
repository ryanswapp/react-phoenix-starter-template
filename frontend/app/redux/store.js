import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerStateReducer, reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createHashHistory'
import Reducers from 'redux/reducers.js'
import routes from 'config/routes.js'

const reducer = combineReducers({
	socket: Reducers.socket,
	channels: Reducers.channels,
  users: Reducers.users,
  currentUser: Reducers.currentUser,
  router: routerStateReducer
})

const finalCreateStore = compose(
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(
    thunkMiddleware
  )
)(createStore)

const configureStore = function(initialState) {
	return finalCreateStore(reducer, initialState)
}

export default {
	configureStore: configureStore
}