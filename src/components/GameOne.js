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
        <Link to={`/`}><Button title="go to Home Page" onclick={this.clicked} /></Link>
        <Title content="Which breed matches the picture below?" />
        {/* <Image url={this.props.image} alt="specificDogBreed"></Image> */}
        <div>
          {!images && 'Loading...'}
          {images && <Image breed={[images[2]]} num={1} />}
        </div>
        {console.log('taty!!!!', this.props.image)}
        {/* <Image breed={[this.props.dogImage]} num={1} /> */}
        <br />
        <Button title={this.props.answers[0]} checkAnswer={this.props.checkAnswer} />
        <Button title={this.props.answers[1]} checkAnswer={this.props.checkAnswer} />
        <Button title={this.props.answers[2]} checkAnswer={this.props.checkAnswer} />
        <Score />
      </div>
    )
  }
}
