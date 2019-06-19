import React from 'react'
import Image from './Image'
import Score from './Score'
import Title from './Title'

export default function GameTwo (props) {
  console.log(props.images)
  const clicked = () =>{}
    return (
      <div>
        <Title content="Welcome to game Two" />
        <h3>Random breed name</h3>
        <Image ulr="#" alt="randomDogBreed" onclick=''></Image>
        <Image ulr="#" alt="randomDogBreed" onclick=''></Image>
        <Image ulr="#" alt="randomDogBreed" onclick=''></Image>
        <Score />
      </div>
    )
  
}
