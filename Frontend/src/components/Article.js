import React, { Component } from 'react'
import back from './18-K-Oro-Anillo-Anillos-de-la-Joyería-Elegante-de-La-Boda-Para-Las-Mujeres-Circón.jpg'
class Article extends Component {
  render () {
    const { title } = this.props

    return (
      <div className='col-md-5 fondo'>
        <h2 className='text-center'>{title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a className='btn btn-info text-center' href='#'>More Info </a>
      </div>
    )
  }
}

export default Article
