import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import { Provider } from 'react-redux'
// pages para spa
import Home from './pages/Home'
import Traders from './pages/Traders'
import Users from './pages/Users'
import Register from './pages/Register'
import Commerces from './pages/Commerces'
const app = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='Commerces' name='Commerces' component={Commerces}></Route>
        <Route path='Traders' name='Traders' component={Traders} ></Route>
        <Route path='Users' name='Users' component={Users} ></Route>
        <Route path='Register' name='Register' component={Register}></Route>
      </Route>
    </Router>
  </Provider>
, app)
registerServiceWorker()
