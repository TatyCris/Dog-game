import React, { Component } from 'react'
import Image from './Image'
import Button from './Button'
import Title from './Title'
import Score from './Score'
import { Link } from 'react-router-dom'

export default class GameOne extends Component {
  // getImage = () => {
  //   return <Image breed={[images[2]]} num={1} />
  // }

  render() {

    console.log('props', this.props.answers);

    const images = this.props.answers
    console.log('images', images);

    const mixedAnswers = this.props.mixAnswers(this.props.answers)
    const gameCondition = this.props.score < 10
    return (
      <div>
         {!gameCondition &&
          <Title content='Finished the game!' />
        }
        {gameCondition &&
        <div>
        <Title content="Which breed matches the picture below?" />
        <div>
          {!images && 'Loading...'}
          {images && <Image breed={[images[2]]} num={1} />}
        </div>
        <br />
        <Button title={mixedAnswers[0]} checkAnswer={this.props.checkAnswer} />
        <Button title={mixedAnswers[1]} checkAnswer={this.props.checkAnswer} />
       
        }

        <Button title={mixedAnswers[2]} checkAnswer={this.props.checkAnswer} />
        <Score size={this.props.score} />
        {!gameCondition &&
          <div>
            <Link to={`/game1`}><Button title="Play game 1" /></Link>
            <Link to={`/game2`}><Button title="Play game 2" /></Link>
          </div>
        }
        <Link to={`/`}><Button title="I need more practice!" onclick={this.clicked} /></Link>
      </div>
    )
  }
}
