import React, { Component } from 'react'

import Article from '../components/Article.js'
class Traders extends Component {
  render () {
    const { query } = this.props.location
    const { params } = this.props
    const { article } = params
    const {date, filter} = query

    const Articles = [
      'Some Articles',
      'Some other Articles',
      'Yet Another Articles',
      'Still More',
      'Fake Article',
      'American Article',
      'Mexican Article',
      'Venezolan Article'
    ].map((title, i) => <Article key={i} title={title} />)
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h2 className='text-center'>Intercambios</h2>
          article: {article}, date: {date}, filter: {filter}
          <div className='row'>{Articles}</div>
        </div>
      </div>
    )
  }
}

export default Traders
