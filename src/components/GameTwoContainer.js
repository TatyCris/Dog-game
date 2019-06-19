import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBreedImages } from '../actions/oneBreed'
import GameTwo from './GameTwo'

class GameTwoContainer extends Component {
    componentDidMount() {
        const breed = this.props.match.params.breed
        this.props.getBreedImages(breed)
      }
    render() {
        return (
            <div>
            
            <GameTwo images={this.props.dogBreeds} />
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        dogBreeds: state.breeds
    }
  }
  
  export default connect (mapStatetoProps, { getBreedImages })(GameTwoContainer)