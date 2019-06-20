import React, { Component } from 'react'
import GameOneContainer from './GameOneContainer'
import GameTwoContainer from './GameTwoContainer'

export default class GameThreeContainer extends Component {
    chooseRamdomComponent = () => {
        const components = [<GameOneContainer />, <GameTwoContainer />] 
        return components[Math.floor(Math.random() * components.length)]
        
    }

    render() {
        return (
            <div key="">
                {this.chooseRamdomComponent()}
            </div>
        )
    }
}
