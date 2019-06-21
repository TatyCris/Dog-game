import React, { Component } from 'react';
import './Score.css';

export default class Score extends Component {
    
    render() {
        const sizeBar = this.props.size * 10 + '%'
        const divWidth = {
            width: sizeBar
        };
        return (
            <div>
                <h4>Score: {sizeBar}</h4>
                <div className='scoreBarContainer'>
                    <div className='scoreBar'>
                        <div className='progress' style={divWidth} ></div>
                    </div>
                </div>
            </div>
        )
    }
}
