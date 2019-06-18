import React, { Component } from 'react'
import Title from './Title'
import GameTwo from './GameTwo'
export default class GameTwoContainer extends Component {
    render() {
        return (
            <div>
            <Title content="Welcome to game Two"/>
            
            <GameTwo />
            </div>
        )
    }
}
