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

      {/* {console.log('here', images)} */}
      {console.log('props', props)}
      {/* {console.log('answers', typeof props.answers[0])}
      {console.log('answers2', props.answers[0])} */}
      
      <Title content="Welcome to game Two" />
      <div>
        { !images && 'Loading...' } 
        { images && <Image breed={props.answers[0]} num={1} />}
        { images && <Image breed={props.answers[1]} num={1} />}
        { images && <Image breed={props.answers[2]} num={1} />}
      </div>



      {/* <Image breed={'akita'} num={1} /> */}
      {/* <Image url={props.image} alt="randomDogBreed" onclick=''></Image>
        <Image url={props.image} alt="randomDogBreed" onclick=''></Image> */}





      <Score />
    </div>
  )

}
