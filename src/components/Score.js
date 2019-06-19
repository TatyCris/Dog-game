import React, { Component } from 'react';
import './Score.css';

export default class Score extends Component {
    render() {
        return (
            <div className='scoreBarContainer'>
                <div className='scoreBar'>
                    <div className='progress'></div>
                </div>
            </div>
        )
    }
}
