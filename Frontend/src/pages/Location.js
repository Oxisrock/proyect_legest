import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showUsers } from '../actions'
class Location extends Component {
  renderUsersList () {
    return this.props.users.map((user) => {
      return (
        <li key={user.id}>{user.name}</li>
      )
    })
  }
  componentWillMount () {
    this.props.showUsers()
  }
  render () {
    return (
      <div className=' container jumbotron'>
        <h2 className='text-center text-shadow '> Users List </h2>
        <ul>
          { this.renderUsersList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.user.list
  }
}

export default connect(mapStateToProps, { showUsers })(Location)
