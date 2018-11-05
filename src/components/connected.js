import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import reducers from '../redux'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)))

export default function Connected({ children }) {
  return <Provider store={store}><div>{children}</div></Provider>
}