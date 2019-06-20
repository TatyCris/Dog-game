import React, { Component } from 'react';
import './Image.css';
// import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { getImages } from '../actions/images'

class Image extends Component {
    
    componentDidMount() {
        const breed = this.props.breed
        const num = this.props.num
        this.props.getImages(breed, num)

    // static propTypes = {
    //     url: propTypes.string.isRequired,
    //     alt: propTypes.string.isRequired,
    //     className: propTypes.string,
    //     onClick: propTypes.func

    }

    render() {
        console.log('breed', this.props.breed);
        console.log('num', this.props.num);
        

        return (
            <div>
                <img src={this.props.url}></img>
                {/* <img src={this.props.url} alt={this.props.alt} className={this.props.className} onClick={this.props.onClick} /> */}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        url: state.dogs.images,
    }
}

export default connect(mapStatetoProps, { getImages })(Image)