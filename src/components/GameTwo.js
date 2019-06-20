import React from 'react'
import Image from './Image'
import Score from './Score'
import Title from './Title'
// import { Link } from 'react-router-dom'
// import Button from './Button'

export default function GameTwo(props) {
  const images = props.answers[0]

  
  return (
    <div>
      {console.log('props', props.answers)}
      {console.log('answers', props.answers[0])}
      
      <Title content="Welcome to game Two" />
      <h3>{props.title}</h3>
      <div>
        { images && images.map((url, index) => <Image breed={ url } alt="Dog" key={index}/>) }
        { !images && 'Loading...' } 
      </div>
      <Image breed={'akita'} num={1} />
      {/* <Image url={props.image} alt="randomDogBreed" onclick=''></Image>
        <Image url={props.image} alt="randomDogBreed" onclick=''></Image> */}





      <Score />
    </div>
  )

}
