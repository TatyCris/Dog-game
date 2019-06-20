import React, { Component } from 'react'
import GameTwo from './GameTwo';
import { connect } from 'react-redux'
import { getImages } from '../actions/images'
import { getBreeds } from '../actions/breeds'
import { getAnswers } from '../actions/game2'
import swal from "sweetalert";


class Game2Container extends Component {
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

    mixAnswers = () => {
        return this.state.answers.sort(() => Math.random() - 0.5);
    }

    checkAnswer = (event) => {
        // console.log('event', event.target.title)
        // console.log('state', this.state.answers[2])


        // console.log(event.target);
        if (event.target.value === this.state.answers[2]) {

            swal({
                text: "CORRECT!",
                buttons: "NEXT QUESTION",
                icon: "success"
            })
        }
    }

    render() {
        if (this.props.dogBreeds.length && !this.props.answers.length ) {
            this.props.getAnswers(this.getAnswers())
        }


        return (
            <div>
                <GameTwo
                    answers={this.props.answers}
                    image={this.props.dogImage}
                    checkAnswer={this.checkAnswer}
                    score={this.props.score}
                    total={this.props.total}
                    lives={this.props.lives}
                    mixAnswers={this.mixAnswers}
                />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {

    return {
        answers: state.game2.answers,
        dogBreeds: state.dogs.breeds,
        dogImage: state.dogs.images,
        score: state.game1.score,
        total: state.game1.total,
        lives: state.game1.lives
    }
}

export default connect(mapStatetoProps, { getImages, getBreeds, getAnswers })(Game2Container)