import React, { Component } from 'react'
import GameOneContainer from './GameOneContainer'
import GameTwoContainer from './GameTwoContainer'
import { connect } from 'react-redux'
import { addPointToScore } from '../actions/game3'

class GameThreeContainer extends Component {
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

// const mapStatetoProps = (state) => {
//     return {
//         answers: state.game1.answers,
//         dogBreeds: state.dogs.breeds,
//         dogImage: state.dogs.images,
//         score: state.game1.score,
//         total: state.game1.total,
//         lives: state.game1.lives
//     }
// }

export default connect(null, { addPointToScore })(GameThreeContainer)
