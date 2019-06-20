import React from 'react'
import Image from './Image'
import Score from './Score'
import Title from './Title'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function GameTwo (props) {

    return (
      <div>
        {/* {console.log(props, 'PROPS')} */}
        <Title content="Welcome to game Two" />
        <h3>{props.title}</h3>
        {/* {dataDisplay(props.image)} */}
        <Image url={props.image} alt="randomDogBreed" ></Image>
        <Image url={props.image} alt="randomDogBreed" ></Image>
        <Image url={props.image} alt="randomDogBreed" ></Image>
  
        <Score />
      </div>
    )
  
}
