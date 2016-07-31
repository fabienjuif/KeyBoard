import 'file?name=[name].[ext]!./index.html'
import '!!file?name=[name].[ext]!normalize.css/normalize.css'
// TODO : normalize.css

import React from 'react'
import { render } from 'react-dom'

import Screens from './components/Screens'

import store from './redux/store'
import { Provider } from 'react-redux'

// import './database'
// import { login } from './redux/actions'

// Inits
// store.dispatch(login())

render(
  <Provider store={store}>
    <Screens />
  </Provider>
  , document.getElementById('app')
)
