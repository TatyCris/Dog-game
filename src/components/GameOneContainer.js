import React, { Component } from 'react'
import GameOne from './GameOne';
import { connect } from 'react-redux'
import { getBreeds } from '../actions/breeds'
import swal from 'sweetalert'
import { getAnswers, addPointToScore } from '../actions/game1'
import { getImages } from '../actions/images'

class Game1Container extends Component {
    state = {
        localanswers: []
    }

    componentDidMount() {
        this.props.getBreeds()
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

    mixAnswers = (answers) => {
        return [...answers].sort(() => Math.random() - 0.5)
    }

    nextQuestion = () => {
        const answers = this.getAnswers()
        this.props.getAnswers(answers)
        
        const answer = answers[answers.length - 1]
        this.props.getImages(this.mixAnswers([answer]), 1)
    }

    checkAnswer = (event) => {
        if (event.target.value === this.props.answers[2]) {
            swal({
                text: "GOOD BOY!",
                buttons: "NEXT QUESTION",
                icon: "success"
            })
                .then(() => {
                    this.nextQuestion()
                })
                if(this.props.score< 10){
                    this.props.addPointToScore()
                }
                else{

                }
        } else {
            swal({
                text: `Wrong! Correct answer is ${this.props.answers[2]}`,
                buttons: "TRY AGAIN",
                icon: "error"
            })
        }
    }

    render() {
        if (this.props.dogBreeds.length && !this.props.answers.length) {
            this.props.getAnswers(this.getAnswers())
        }

        return (
            <div>
                <GameOne
                    answers={this.props.answers}
                    // answers={this.setState({
                    //     localAnswers: this.props.answers
                    // })}
                    image={this.props.dogImage}
                    checkAnswer={this.checkAnswer}
                    mixAnswers={this.mixAnswers}
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
        answers: state.game1.answers,
        dogBreeds: state.dogs.breeds,
        dogImage: state.dogs.images,
        score: state.game1.score,
        total: state.game1.total,
        lives: state.game1.lives
    }
}

export default connect(mapStatetoProps,
    {
        getBreeds,
        getAnswers,
        addPointToScore,
        getImages
    }
)(Game1Container)