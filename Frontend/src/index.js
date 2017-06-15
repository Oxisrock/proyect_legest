import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, indexRouter, hashHistory} from 'react-router'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
// pages para spa
import Home from './pages/Home'
import Contact from './pages/Contact'
import Location from './pages/Location'
const app = document.getElementById('root')
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <indexRouter component={App} />
      <Route path='Home' component={Home} />
      <Route path='Contact' component={Contact} />
      <Route path='Location' component={Location} />
    </Route>
  </Router>
  , app)
registerServiceWorker()
