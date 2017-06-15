import React, { Component } from 'react'

import NavItem from './NavItem'

class NavBar extends Component {
  constructor () {
    super()
    this.state = {
      onView: ['Home', 'Contact', 'Location']
    }
  }
  onClick (ev) {
  //  {this.props.isFirstOne === true ? 'active' : 'desactive'}
  }
  render () {
    return (
      <div className='row'>
        <nav className='navbar navbar-inverse'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
              <span className='sr-only'>Esta Barra Desplega</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand hvr-grow'>FRIENDER</a>
          </div>
          <NavItem />
        </nav>
      </div>
    )
  }
}

export default NavBar
