import React, { Component } from 'react'
import Image from './Image'
import Button from './Button'
import Title from './Title'
import Score from './Score'


export default class GameOne extends Component {
  render() {
    
    return (
      
      <div>
        <Button title='Got to Home Page' onclick={this.props.goHome}/>
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
