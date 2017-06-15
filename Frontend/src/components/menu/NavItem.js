import React, { Component } from 'react'

import { Link } from 'react-router'

import FormLogin from '../FormLogin'

import 'bootstrap/dist/css/bootstrap.css'
class NavItem extends Component {
  render () {
    return (
      <div id='navbar' className='navbar-collapse collapse'>
        <ul className='nav navbar-nav'>
          <li className='dropdown hvr-sweep-to-left hvr-push'><Link to='Home'>Home</Link></li>
          <li className='dropdown hvr-sweep-to-left hvr-push'><Link to='Contact'>Contact</Link></li>
          <li className='dropdown hvr-sweep-to-left hvr-push'><Link to='Location'>Location</Link></li>
        </ul>
        <div className='nav navbar-nav navbar'>
          <li className='dropdown'>
            <a className='dropdown-toggle hvr-sweep-to-bottom' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>
              <span className='glyphicon glyphicon-user' aria-hidden='true' />
              <span className='caret' />
            </a>
            <ul className='dropdown-menu'>
              <li>
                <a ><FormLogin /></a>
              </li>
            </ul>
          </li>
        </div>
      </div>
    )
  }
}
export default NavItem
