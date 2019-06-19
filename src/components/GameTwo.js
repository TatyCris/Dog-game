import React from 'react'
import Image from './Image'
import Score from './Score'
import Title from './Title'
import { Link } from 'react-router-dom'
import Button from './Button'

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
        {/* <Link to={`/`}><Button title="go to Home Page" onclick={this.props.clicked} /></Link> */}
        <Title content="Welcome to game Two" />
        <h3>{props.title}</h3>
        {/* {dataDisplay(props.image)} */}
        { !props.image && 'Loading...' } 
        { props.image &&  <Image url={props.image} alt="randomDogBreed" onclick=''></Image>}    
        <Score />
      </div>
    )
  
}
