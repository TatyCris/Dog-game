import React, { Component } from 'react'
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import DogBreedImagesContainer from './components/DogBreedImagesContainer';
import { Route }  from 'react-router-dom'



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <DogsListContainer /> */}
          <Route exact path="/" component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
        </header>
      </div>
    )
  }
}