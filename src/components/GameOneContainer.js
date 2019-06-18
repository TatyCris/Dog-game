import React, { Component } from 'react'
import GameOne from './GameOne';
import { connect } from 'react-redux'


class Game1Container extends Component {

    chooseRamdomBreed = (breeds) => {
        return breeds[Math.floor(Math.random() * breeds.length)]
    }

    getAnswers = (breeds) => {
        const randomAnswer1 = this.chooseRamdomBreed(breeds)
        let randomAnswer2 = this.chooseRamdomBreed(breeds)
        let correctAnswer = this.chooseRamdomBreed(breeds)

        while (randomAnswer1 === randomAnswer2) {
            randomAnswer2 = this.chooseRamdomBreed(breeds)
        }
        while (randomAnswer2 === correctAnswer) {
            correctAnswer = this.chooseRamdomBreed(breeds)
        }
        while (randomAnswer1 === correctAnswer) {
            correctAnswer = this.chooseRamdomBreed(breeds)
        }

        const answers = [randomAnswer1, randomAnswer2, correctAnswer]
        const imageQuestion = breeds.find(breed => breed === answers[2])
        console.log('image', imageQuestion);

        return answers
    }

    render() {
        return (
            <div>
                <GameOne />
            </div>
        )
    }
}

export default connect()(Game1Container)
