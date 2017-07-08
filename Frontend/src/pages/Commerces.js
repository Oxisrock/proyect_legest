import React, { Component } from 'react'

import Article from '../components/Article'
class Commerces extends Component {
  render () {
    const Articles = [
      'MSP Masive Sun Products',
      'CCR Las Virtudes ',
      'Black Tienda',
      'LUG DEV',
      'Pizzeria Napolis'
    ].map((title, i) => <Article key={i} title={title} />)
    /**
    const adText = [
      'Ad spot # 1',
      'Ad spot # 2',
      'Ad spot # 3',
      'Ad spot # 4',
      'Ad spot # 5'
    ]
    const randomAd = adText[Math.round(Math.random() * (adText.length-1))]
    **/
    const containerStyle = {
      marginTop: '1em'
    }
    return (
      <div className='container jumbotron' style={containerStyle}>
        <h2 className='text-center'>Comercios</h2>
        <div className='row articles'>{Articles}</div>
      </div>
    )
  }
}

export default Commerces
