import React, { Component } from 'react'
import Score from './Score'
import Title from './Title'
import { Link } from 'react-router-dom'
import Button from './Button'
import './GameTwo.css'

export default class GameTwo extends Component {
  render() {
    const images = this.props.mixAnswers(this.props.answers)
    const gameCondition = this.props.score < 10

    return (

      <div>
        {!gameCondition &&
          <Title content='Finished the game, check the score!' />
        }
        {gameCondition &&
          <div>
            <Title content={`Which picture shows a ${this.props.title} ?`} />
            <br />
            <div className='images'>
              {!images && 'Loading...'}
              {images && <div> <img src={images[0]} onClick={this.props.checkAnswer} alt="Dog" /><img src={images[1]} onClick={this.props.checkAnswer} alt="Dog" /><img src={images[2]} onClick={this.props.checkAnswer} alt="Dog" /></div>}
            </div>
         </div>
        }
        <Score size={this.props.score} />
        {!gameCondition &&
          <div>
            <Link to={`/game1`}><Button title="Play game 1" /></Link>
            <Link to={`/game2`}><Button title="Play game 2" /></Link>
            <Link to={`/game3`}><Button title="Play game 3" /></Link>
          </div>
        }
        <Link to={`/`}><Button title="I need more practice!" onclick={this.clicked} /></Link>
      </div>
    )
  }
}
