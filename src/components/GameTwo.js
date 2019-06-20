import React from 'react'
import Image from './Image'
import Score from './Score'
import Title from './Title'
// import { Link } from 'react-router-dom'
// import Button from './Button'

export default function GameTwo(props) {
  //const images = props.answers

  
  return (
    <div>
     
      
      <Title content="Welcome to game Two" />
      <h3>{props.title}</h3>
      <div>
       
        <Image breed={ props.answers } num={1}/>
        
      </div>
     
      {/* <Image url={props.image} alt="randomDogBreed" onclick=''></Image>
        <Image url={props.image} alt="randomDogBreed" onclick=''></Image> */}





      <Score />
    </div>
  )

}
