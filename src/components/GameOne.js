import React, { Component } from 'react'
import Image from './Image'
import Button from './Button'
import Title from './Title'
import Score from './Score'
import { Link } from 'react-router-dom'

export default class GameOne extends Component {
  render() {
    const images = this.props.answers
    const mixedAnswers = this.props.mixAnswers(this.props.answers)
    return (
      <div>
        <Title content="Which breed matches the picture below?" />
        <div>
          {!images && 'Loading...'}
          {images && <Image breed={[images[2]]} num={1} />}
        </div>
        <br />
        <Button title={mixedAnswers[0]} checkAnswer={this.props.checkAnswer} />
        <Button title={mixedAnswers[1]} checkAnswer={this.props.checkAnswer} />
        <Button title={mixedAnswers[2]} checkAnswer={this.props.checkAnswer}  />
        <Score />
        <Link to={`/`}><Button title="I need more practice!" onclick={this.clicked} /></Link>
      </div>
    )
  }
}
