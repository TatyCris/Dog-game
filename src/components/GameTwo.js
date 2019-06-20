import React, { Component } from 'react'
import Image from './Image'
import Score from './Score'
import Title from './Title'
// import { Link } from 'react-router-dom'
// import Button from './Button'



export default class GameTwo extends Component {
  state = { answers: [], images: [] }

  setAnswers() {
    this.setState({
      answers: this.props.answers
    })
  }

  render() {
    console.log('hi', this.props.answers);
    if (this.state.answers.length === 0) {
      // this.setState({
      //   answers: this.props.answers
      // })
      console.log('hello');
      
    } 

    return (
      <div>
        {/* {console.log('props', props.answers)}
        {console.log('answers', typeof props.answers[0])}
        {console.log('answers2', props.answers[0])}

        <Title content="Welcome to game Two" />
        <h3>{props.title}</h3> */}
        {/* <div>
        { !images && 'Loading...' } 
        { images && <Image breed={props.answers[0]} num={1} />}
      </div> */}



        {/* <Image breed={img1} num={1} /> */}
        {/* <Image url={props.image} alt="randomDogBreed" onclick=''></Image>
        <Image url={props.image} alt="randomDogBreed" onclick=''></Image> */}





        <Score />
      </div>
    )
  }
}



