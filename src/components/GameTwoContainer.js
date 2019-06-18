import React, { Component } from 'react'
import GameTwo from './GameTwo'
import { connect } from 'react-redux'


 class GameTwoContainer extends Component {

    chooseRamdomBreed = (breeds) => {
        return breeds[Math.floor(Math.random() * breeds.length)]
    }
    getImages = (breeds) => {
        const randomImage1 = this.chooseRamdomBreed(breeds)
        let randomImage2 = this.chooseRamdomBreed(breeds)
        let correctImage = this.chooseRamdomBreed(breeds)

        while (randomImage1 === randomImage2) {
            randomImage2 = this.chooseRamdomBreed(breeds)
        }
        while (randomImage2 === correctImage) {
            correctImage = this.chooseRamdomBreed(breeds)
        }
        while (randomImage1 === correctImage) {
            correctImage = this.chooseRamdomBreed(breeds)
        }

        const images = [randomImage1, randomImage2, correctImage]
        const nameQuestion = breeds.find(breed => breed === images[2])
        console.log('image', nameQuestion);

        return images

    }
    render() {
        return (
            <div>
            <GameTwo />
            </div>
        )
    }
}

export default connect()(GameTwoContainer)