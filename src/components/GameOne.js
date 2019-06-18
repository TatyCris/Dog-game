import React, { Component } from 'react'
import Image from './Image'
import Button from './Button'

export default class GameOne extends Component {
  render() {
    return (
      <div>
        <h1>Hello from Single Dog component :)</h1>   {/* Replace this with a title component */}
        <Image ulr="#" alt="speciFicDogBreed"></Image>
        <Button title="first random name" onClick=""/>
        <Button title="second random name" onClick=""/>
        <Button title="third random name" onClick=""/>
      </div>
    )
  }
}
