import React, { Component } from 'react'
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import DogBreedImagesContainer from './components/DogBreedImagesContainer';
import { Route } from 'react-router-dom'
import Game1Container from './components/GameOneContainer'
import GameTwoContainer from './components/GameTwoContainer'
// import Image from './components/Image'



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Image breed={'akita'} num={1}/> */}
          {/* <DogsListContainer /> */}
          <Route exact path="/" component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
          <Route exact path="/game1" component={Game1Container} />
          <Route exact path="/game2" component={GameTwoContainer} />
          {/* <Route exact path="/game2" component={Game2Container} />
          <Route exact path="/game3" component={Game3Container} /> */}
        </header>
      </div>
    )
  }
}