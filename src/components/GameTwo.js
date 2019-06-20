import React from 'react'
import Image from './Image'
import Score from './Score'
import Title from './Title'
// import { Link } from 'react-router-dom'
// import Button from './Button'

export default function GameTwo(props) {

  const images = props.answers
  
  return (
    <div>

      {/* {console.log('props', props.answers)} */}
      
      <Title content="Welcome to game Two" />
      <div>
        { !images && 'Loading...' } 
        { images && <Image breed={[images[0], images[1], images[2]]} num={1} />}
      </div>

      <Score />
    </div>
  )

}
