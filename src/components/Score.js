import React, { Component } from 'react';
import './Score.css';



export default class Score extends Component {
    render() {
        const sizeBar = this.props.size
        const divWidth = {
            width: sizeBar * 10 + '%'

        };
        return (
            <div className='scoreBarContainer'>
                <div className='scoreBar'>
                    <div className='progress' style={divWidth} ></div>
                </div>
            </div>
        )
    }
}
