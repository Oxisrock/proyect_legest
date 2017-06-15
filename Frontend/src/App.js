import React, { Component } from 'react'
import Layout from './pages/Layout'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App-intro'>
        <Layout />
        {this.props.children}
      </div>
    )
  }
}

export default App
