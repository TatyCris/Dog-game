import React, { Component } from 'react'
import Image from './Image'
import Button from './Button'
import Title from './Title'
import Score from './Score'


export default class GameOne extends Component {
  render() {
    // const image = this.props.getImages(this.props.answers[2], 1)
    // console.log(this.props.answers);
    
    return (
      <div>
        {/* <h1>{this.props.answers}</h1> */}
        <Title content="Which breed matches the picture below?"/>
        <Image url={this.props.image} alt="specificDogBreed"></Image>
        <Button title={this.props.answers[0]} onClick={this.props.checkAnswers}/>
        <Button title={this.props.answers[1]} onClick={this.props.checkAnswers}/>
        <Button title={this.props.answers[2]} onClick={this.props.checkAnswers}/>
        <Score />
      </div>
    )
  }
}
