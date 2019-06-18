import React, { Component } from 'react'
import DogBreedImages from './DogBreedImages'
import { connect } from 'react-redux'
import { getBreedImages } from '../actions/oneBreed'

class DogBreedImagesContainer extends Component {

  componentDidMount() {
    const breed = this.props.match.params.breed
    this.props.getBreedImages(breed)
  }


  render() {
    return <DogBreedImages images={this.props.dogBreeds} title={this.props.match.params.breed} />
  }
}

const mapStatetoProps = (state) => {
  return {
      dogBreeds: state.breeds
  }
}

export default connect (mapStatetoProps, { getBreedImages })(DogBreedImagesContainer)