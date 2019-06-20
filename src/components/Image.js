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

    render() {
        console.log('breedpassing inside getImages', this.props.breed);
        console.log('num', this.props.num);
        

        return (
            <div>
                 { !this.props.images && 'Loading...' } 
        { this.props.images && this.props.images.map( image => <img src={image}></img>)}
                {console.log('taty', this.props.images)}
                {this.props.images.map( image => <img src={image}></img>)}
                {/* <img src={this.props.images}></img> */}
                {/* <img src={this.props.url} alt={this.props.alt} className={this.props.className} onClick={this.props.onClick} /> */}
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