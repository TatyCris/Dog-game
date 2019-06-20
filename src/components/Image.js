import React, { Component } from 'react';
import './Image.css';
import propTypes from 'prop-types'

export default class Image extends Component {
    static propTypes = {
        url: propTypes.string,
        alt: propTypes.string,
        className: propTypes.string,
        onClick: propTypes.func
    }
    render() {
        
        return (
                <img src={this.props.url} alt={this.props.alt} className={this.props.className} onClick={this.props.onClick} />
        )
    }
}
