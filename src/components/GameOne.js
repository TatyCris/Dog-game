import React, { Component } from 'react'
import Image from './Image'
import Button from './Button'
import Title from './Title'
import Score from './Score'
import { Link } from 'react-router-dom'



export default class GameOne extends Component {
  render() {
    
    return (
      
      <div>
        <Link to={`/`}><Button title="go to Home Page" onclick={this.clicked} /></Link>
        <Title content="Which breed matches the picture below?"/>
        <Image url={this.props.image} alt="specificDogBreed"></Image>
        <br/>
        <Button title={this.props.answers[0]} checkAnswer={this.props.checkAnswer}/>
        <Button title={this.props.answers[1]} checkAnswer={this.props.checkAnswer}/>
        <Button title={this.props.answers[2]} checkAnswer={this.props.checkAnswer}/>
        <Score />
      </div>
    )
  }
}
