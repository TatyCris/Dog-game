import React, { Component } from 'react'
import Score from './Score'
import Title from './Title'
import { Link } from 'react-router-dom'
import Button from './Button'
import './GameTwo.css'

export default class GameTwo extends Component {
  render() {
    const images = this.props.mixAnswers(this.props.answers)

    return (
      <div>
        <Title content={`Which picture shows a ${this.props.title} ?`} />
        <br />
        <div className='images'>
          {!images && 'Loading...'}
          {images && <div> <img src={images[0]} onClick={this.props.checkAnswer} alt="Dog" /><img src={images[1]} onClick={this.props.checkAnswer} alt="Dog" /><img src={images[2]} onClick={this.props.checkAnswer} alt="Dog" /></div>}
        </div>
        <Score />
        <Link to={`/`}><Button title="go to Home Page" onclick={this.clicked} /></Link>
      </div>
    )
  }
}
