import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showUsers } from '../actions'
class Location extends Component {
  render () {
    return (
      <div className=' container jumbotron'>
        <h2 className='text-center text-shadow '> Users List </h2>
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
