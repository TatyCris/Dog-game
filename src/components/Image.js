import React, { Component } from 'react';
import './Image.css';

export default class Image extends Component {
    render() {
        return (
            <div className="imageComponent">
                <img src="#" alt="Dog" className="image"/>
            </div>
        )
    }
}
