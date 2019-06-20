import React from 'react'
import Image from './Image'
import Score from './Score'
import Title from './Title'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function GameTwo (props) {

<<<<<<< HEAD
    return (
      <div>
        {/* {console.log(props, 'PROPS')} */}
        <Title content="Welcome to game Two" />
        <h3>{props.title}</h3>
        {/* {dataDisplay(props.image)} */}
        <Image url={props.image} alt="randomDogBreed" onclick=''></Image>
        <Image url={props.image} alt="randomDogBreed" onclick=''></Image>
        <Image url={props.image} alt="randomDogBreed" onclick=''></Image>
        
       


        
=======
  console.log(props.image)
    return (
      <div>
        {/* <Link to={`/`}><Button title="go to Home Page" onclick={this.props.clicked} /></Link> */}
        <Title content="Welcome to game Two" />
        <h3>{props.title}</h3>
        {/* {dataDisplay(props.image)} */}
        { !props.image && 'Loading...' } 
        { props.image &&  <Image url={props.image} alt="randomDogBreed" onclick=''></Image>}    
>>>>>>> 81c96bdc5ca40410ea488c3e0ee944b676a235fe
        <Score />
      </div>
    )
  
}
