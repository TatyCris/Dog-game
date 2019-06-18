import React, { Component } from 'react'
import DogBreedImages from './DogBreedImages'
import { connect } from 'react-redux'
import { getImages } from '../actions/images'

class DogBreedImagesContainer extends Component {

  componentDidMount() {
    const breed = this.props.match.params.breed
    this.props.getImages(breed, 10)
  }


  render() {
    return <DogBreedImages images={this.props.dogBreeds} title={this.props.match.params.breed} />
  }
}

const mapStatetoProps = (state) => {
  return {
      dogBreeds: state.dogs.images
  }
}

export default connect (mapStatetoProps, { getImages })(DogBreedImagesContainer)