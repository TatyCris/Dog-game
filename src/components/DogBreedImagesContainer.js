import React, { Component } from 'react'
import DogBreedImages from './DogBreedImages'
import { connect } from 'react-redux'
import { getImages } from '../actions/images'

class DogBreedImagesContainer extends Component {

  componentDidMount() {
    console.log('DogBreedImagesContainer componentDidMount test')
    const breed = this.props.match.params.breed
    this.props.getImages([breed], 10, true)
  }


  render() {
    const breed = this.props.match.params.breed
    return !this.props.loading ? (
      <div>
        <DogBreedImages
          images={this.props.dogBreeds}
          title={breed}
          breed={breed}
        />
      </div>
    ) : 'Loading...'
  }
}

const mapStatetoProps = (state) => {
  return {
    dogBreeds: state.dogs.images,
    loading: state.dogs.loading
  }
}

export default connect(mapStatetoProps, { getImages })(DogBreedImagesContainer)