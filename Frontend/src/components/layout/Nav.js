import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'

class Nav extends Component {
  constructor () {
    super()
    this.state = {
      collapsed: true
    }
  }
  toggleCollapse () {
    const collapsed = !this.state.collapsed
    this.setState({collapsed})
  }
  render () {
    const { location } = this.props
    const { collapsed } = this.state
    const homeClass = location.pathname === '/' ? 'active' : ''
    const contactClass = location.pathname.match(/^\/Contact/) ? 'active' : ''
    const locationClass = location.pathname.match(/^\/Location/) ? 'active' : ''
    const navClass = collapsed ? 'collapse' : ''
    return (
      <nav className='navbar navbar-inverse navbar-fixed-top' role='navigation'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toogle' onClick={this.toggleCollapse.bind(this)}>
              <span className='sr-only'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
          </div>
          <div className={'navbar-collapse' + navClass} id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              <li className={homeClass}>
                <IndexLink to='/' onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li className={contactClass}>
                <Link to='contact' onClick={this.toggleCollapse.bind(this)}>Contact</Link>
              </li>
              <li className={locationClass}>
                <Link to='location' onClick={this.toggleCollapse.bind(this)}>Location</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Nav
