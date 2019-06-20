import React, { Component } from 'react'
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import DogBreedImagesContainer from './components/DogBreedImagesContainer';
import { Route } from 'react-router-dom'
import GameOneContainer from './components/GameOneContainer'
import GameTwoContainer from './components/GameTwoContainer'
import GameThreeContainer from './components/GameThreeContainer'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
          <Route exact path="/game1" component={GameOneContainer} />
          <Route exact path="/game2" component={GameTwoContainer} />
          <Route exact path="/game3" component={GameThreeContainer} />
        </header>
      </div>
    )
  }
}