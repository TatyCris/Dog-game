import React, { Component } from 'react'
import DogBreedImages from './DogBreedImages'
import { connect } from 'react-redux'
import { getImages } from '../actions/images'

class DogBreedImagesContainer extends Component {

  componentDidMount() {
    const breed = this.props.match.params.breed
    this.props.getImages([breed], 10)
  }


  render() {
    const breed = this.props.match.params.breed
    return (
      <div>
        <DogBreedImages
          images={this.props.dogBreeds} title={breed} breed={breed} />
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    dogBreeds: state.dogs.images,
  }
}

export default connect(mapStatetoProps, { getImages })(DogBreedImagesContainer)