import React, { Component } from 'react';
import './Image.css';
import { connect } from 'react-redux'
import { getImages } from '../actions/images'

class Image extends Component {

    componentDidMount() {
        const breed = this.props.breed
        const num = this.props.num
        this.props.getImages(breed, num)
    }

    getImageUrl() {
        return this.props.images && this.props.images.map(
            breadSearched => breadSearched.map(
                image => <img src={image} alt='dog' />))
    }

    render() {
        return (
            <div>
                {!this.props.images && 'loading...'}
                {this.getImageUrl()}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        images: state.dogs.images,
    }
}

export default connect(mapStatetoProps, { getImages })(Image)