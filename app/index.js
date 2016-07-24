import 'file?name=[name].[ext]!./index.html'
// TODO : normalize.css

import React from 'react'
import { render } from 'react-dom'

import App from './App'

import store from './store'
import { Provider } from 'react-redux'

import './database'
import { login } from './Login/actions'

// Inits
store.dispatch(login())

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
)
