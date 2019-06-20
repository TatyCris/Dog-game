import React, { Component } from 'react'
import Image from './Image'
import Button from './Button'
import Title from './Title'
import Score from './Score'
import { Link } from 'react-router-dom'

export default class GameOne extends Component {
  render() {
    const images = this.props.answers
    return (
      <div>
        <Title content="Which breed matches the picture below?" />
        <div>
          {!images && 'Loading...'}
          {images && <Image breed={[images[2]]} num={1} />}
        </div>
        <br />
        <Button title={this.props.answers[0]} checkAnswer={this.props.checkAnswer} />
        <Button title={this.props.answers[1]} checkAnswer={this.props.checkAnswer} />
        <Button title={this.props.answers[2]} checkAnswer={this.props.checkAnswer} />
        <Score />
        <Link to={`/`}><Button title="go to Home Page" onclick={this.clicked} /></Link>
      </div>
    )
  }
}
