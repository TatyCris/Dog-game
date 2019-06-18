import React, { Component } from 'react'
import Image from './Image'
import Button from './Button'
import Title from './Title'


export default class GameOne extends Component {
  render() {
    return (
      <div>
        <Title content="Wellcome to game one"/>
        <Image ulr="#" alt="speciFicDogBreed"></Image>
        <Button title="first random name" onClick=""/>
        <Button title="second random name" onClick=""/>
        <Button title="third random name" onClick=""/>
      </div>
    )
  }
}
