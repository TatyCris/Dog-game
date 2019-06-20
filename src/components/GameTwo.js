import React, { Component } from 'react'
import Score from './Score'
import Title from './Title'
import { Link } from 'react-router-dom'
import Button from './Button'
import './GameTwo.css'
import Image from './Image'

export default class GameOne extends Component {
  render() {
    const images = this.props.answers
    // const breed = images.map()
    console.log('images', images);
    

    return (
      <div>
        <Title content={`Which picture shows a ${this.props.title} ?`} />
        <br />

        <div>
          {!images && 'Loading...'}
          {images && <Image breed={[images[0], images[1], images[2]]} num={1} />}
        </div>
        
        {/* <Image breed={[images[0]]} num={1} />
        <Image breed={[images[1]]} num={1} />
        <Image breed={[images[2]]} num={1} /> */}

        {/* <div className='gameImages'>
          {!images && 'Loading...'}
          {images && <div> <img src={images[0]} onClick={this.props.checkAnswer} /><img src={images[1]} onClick={this.props.checkAnswer} /><img src={images[2]} onClick={this.props.checkAnswer} /></div>}
        </div> */}
        <Score />
        <Link to={`/`}><Button title="go to Home Page" onclick={this.clicked} /></Link>
      </div>
    )
  }
}
