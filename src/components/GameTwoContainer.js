import React, { Component } from 'react'
import Title from './Title'
import GameTwo from './GameTwo'
export default class GameTwoContainer extends Component {
    render() {
        return (
            <div>
            <Title content="Welcome to game Two"/>
            <h3>Random breed name</h3>
            <GameTwo />
            </div>
        )
    }
}
