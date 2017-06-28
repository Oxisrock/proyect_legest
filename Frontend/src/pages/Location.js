import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showUsers } from '../actions'
class Location extends Component {
  constructor(props) {
    super(props)

    // bind 'this' to methods
    this.renderUsersList = this.renderUsersList.bind(this)
  }
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

function mapStateToProps(state) {
  return {
    // Fix this, why state.user has this object hierarchy { state: { list: [] } }
    users: state.user.state.list
  }
}

export default connect(mapStateToProps, { showUsers })(Location)
