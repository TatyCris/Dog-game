import React, { Component } from 'react'
import GameOne from './GameOne';
import { connect } from 'react-redux'
import { getImages } from '../actions/images'
import { getBreeds } from '../actions/breeds'

class Game1Container extends Component {
    state = { answers: [] }

    componentDidMount() {
        this.props.getBreeds()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.dogBreeds !== this.props.dogBreeds) {
            this.setAnswers()
        }
    }

    setAnswers() {
        this.setState({
            answers: this.getAnswers()
        })
    }

    chooseRamdomBreed = () => {
        return this.props.dogBreeds[Math.floor(Math.random() * this.props.dogBreeds.length)]
    }

    getAnswers = () => {
        if (this.props.dogBreeds.length < 2) {
            return [];
        }

        const randomAnswer1 = this.chooseRamdomBreed(this.props.dogBreeds)
        let randomAnswer2 = this.chooseRamdomBreed(this.props.dogBreeds)
        let correctAnswer = this.chooseRamdomBreed(this.props.dogBreeds)

        while (randomAnswer1 === randomAnswer2) {
            randomAnswer2 = this.chooseRamdomBreed(this.props.dogBreeds)
        }
        while (randomAnswer2 === correctAnswer) {
            correctAnswer = this.chooseRamdomBreed(this.props.dogBreeds)
        }
        while (randomAnswer1 === correctAnswer) {
            correctAnswer = this.chooseRamdomBreed(this.props.dogBreeds)
        }

        return [randomAnswer1, randomAnswer2, correctAnswer]
    }

    mixAnswers = () => {
        return this.state.answers.sort(() => Math.random() - 0.5);
    }

    checkAnswer = (event) => {

    }

    render() {
        const hasBreeds = this.props.dogBreeds.length;
        const hasImage = this.props.dogImage.length;

        if (hasBreeds && hasImage === 0) {
            this.props.getImages(this.state.answers[2], 1)
        }

        return (
            <div>
                <GameOne 
                answers={this.mixAnswers()} 
                image={this.props.dogImage} 
                checkAnswer={this.checkAnswer}
                score={this.props.score}
                total={this.props.total}
                lives={this.props.lives}
                
                />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        dogBreeds: state.dogs.breeds,
        dogImage: state.dogs.images,
        score: state.game1.score,
        total: state.game1.total,
        lives: state.game1.lives
    }
}

export default connect(mapStatetoProps, { getImages, getBreeds })(Game1Container)