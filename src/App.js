import React, { Component } from 'react'
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import { Route }  from 'react-router-dom'



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <DogsListContainer /> */}
          <Route exact path="/" component={DogsListContainer} />
        </header>
      </div>
    )
  }
}