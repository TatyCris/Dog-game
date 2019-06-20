import React from 'react'

import Score from './Score'
import Title from './Title'


export default function GameTwo(props) {

  const images = props.answers
  
  return (
    <div>

      
      <Title content="Welcome to game Two" />
      <h3>{props.title}</h3>
      <div className='gameImages'>
        { !images && 'Loading...' } 
        { images && <div> <img src={images[0]} onClick={props.checkAnswer}/><img src={images[1]} onClick={props.checkAnswer} /><img src={images[2]}  onClick={props.checkAnswer}/></div>}
      </div>

      <Score />
    </div>
  )

}
