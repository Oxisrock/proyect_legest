import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'
import FormLogin from '../FormLogin'
import Search from '../Search'
import logo from './dispute-bills-chicago.png'
class Nav extends Component {
  constructor () {
    super()
    this.state = {
      collapsed: true,
      display: true
    }
  }
  toggleCollapse () {
    const collapsed = !this.state.collapsed
    this.setState({collapsed})
  }
  render () {
    const { location } = this.props
    const { collapsed } = this.state
    const { display } = this.state
    const homeClass = location.pathname === '/' ? 'active' : ''
    const commercesClass = location.pathname.match(/^\/Commerces/) ? 'active' : ''
    const tradersClass = location.pathname.match(/^\/Traders/) ? 'active' : ''
    const usersClass = location.pathname.match(/^\/Users/) ? 'active' : ''

    const navClass = collapsed ? 'collapse' : ''
    return (
      <nav className='navbar navbar-inverse' role='navigation'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' onClick={this.toggleCollapse.bind(this)}>
              <span className='sr-only'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand hvr-grow'><img src={logo} alt="Dispute Bills" /></a>
          </div>
          <div className={' navbar-right navbar-collapse ' + navClass} id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav navbar-right'>
              <li className={'hvr-sweep-to-left hvr-push ' + homeClass}>
                <IndexLink to='/' onClick={this.toggleCollapse.bind(this)}>Home <span className='glyphicon glyphicon-home'></span></IndexLink>
              </li>
              <li className={'hvr-sweep-to-left hvr-push ' + commercesClass}>
                <Link to='Commerces' onClick={this.toggleCollapse.bind(this)}>Comercios <span className='glyphicon glyphicon-shopping-cart'></span></Link>
              </li>
              <li className={'hvr-sweep-to-left hvr-push ' + tradersClass}>
                <Link to='Traders' onClick={this.toggleCollapse.bind(this)}>Intercambios <span className='glyphicon glyphicon-briefcase'></span></Link>
              </li>
              <li className={'hvr-sweep-to-left hvr-push ' + usersClass}>
                <Link to='Users' onClick={this.toggleCollapse.bind(this)}>Usuarios <span className='glyphicon glyphicon-plus-sign'></span></Link>
              </li>
              <li>
                <Search className='text-center' />
            </li>
              <div className='nav navbar-nav navbar'>
                <li className='dropdown'>
                  <a className='dropdown-toggle hvr-sweep-to-bottom' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>
                    <span className='glyphicon glyphicon-user' aria-hidden='true' />
                    <span className='caret' />
                  </a>
                  <ul className='dropdown-menu' id='login-dp'>
                    <li>
                      <a><FormLogin /></a>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Nav
