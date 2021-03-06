import React, { Component } from 'react'

import Article from '../components/Article'
class Home extends Component {
  render () {
    const Articles = [
      'Curso Diseño Web',
      'Curso Marketing Online ',
      'Curso Dibujo 3D',
      'Curso Modelado 3D',
      'Curso Como Aprender a Programar sin internet'
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
        <h2 className='text-center'>Bienvenido</h2>
        <div className='row articles'>{Articles}</div>
      </div>
    )
  }
}

export default Home
