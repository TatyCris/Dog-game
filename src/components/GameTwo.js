import React from 'react'
import Image from './Image'
import Score from './Score'
import Title from './Title'

const dataDisplay = (myImage) =>{
        
  if(myImage !== undefined){
      console.log('Yes')
     return 'no'
  }
  else {console.log('NO!')
      return 'loading...'}   
}


export default function GameTwo (props) {
  
  console.log(props.image)
    return (
      <div>
        
        <Title content="Welcome to game Two" />
        <h3>{props.title}</h3>
        {/* {dataDisplay(props.image)} */}
        { !props.image && 'Loading...' } 
        { props.image &&  <Image url={props.image} alt="randomDogBreed" onclick=''></Image>}
        
       


        
        <Score />
      </div>
    )
  
}
