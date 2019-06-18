import React, { Component } from 'react';
import './Image.css';
import propTypes from 'prop-types'

export default class Image extends Component {
    static propTypes = {
        url: propTypes.string.isRequired,
        alt: propTypes.string.isRequired,
        className: propTypes.string
    }
    render() {
        return (
                <img src={this.props.url} alt={this.props.alt} className={this.props.className} />
        )
    }
}
