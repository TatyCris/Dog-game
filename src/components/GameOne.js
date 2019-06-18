import React, { Component } from 'react'
import Image from './Image'
import Button from './Button'
import Title from './Title'
import Score from './Score'


export default class GameOne extends Component {
  render() {
    return (
      <div>
        <Title content="Which breed matches the picture below?"/>
        <Image ulr="#" alt="specificDogBreed"></Image>
        <Button title="first random name" onClick=""/>
        <Button title="second random name" onClick=""/>
        <Button title="third random name" onClick=""/>
        <Score />
      </div>
    )
  }
}
