import React, { Component } from 'react'
import GameTwo from './GameTwo';
import { connect } from 'react-redux'
import swal from "sweetalert";
import { getRandomBreed } from '../actions/randomBreed'

class Game2Container extends Component {
    state = { answers: [], breeds: [] }

    componentDidMount() {
        this.props.getRandomBreed()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.dogBreeds !== this.props.dogBreeds) {
            this.setAnswers()
        }
    }

    setAnswers() {
        this.setState({
            answers: this.getAnswers(),
            breeds: this.props.dogBreeds[2]
        })
    }

    chooseRamdomBreed = () => {
        return this.props.dogBreeds[Math.floor(Math.random() * this.props.dogBreeds.length)]
    }

    getAnswers = () => {
        const randomAnswer1 = this.props.dogImage[0]
        const randomAnswer2 = this.props.dogImage[1]
        const correctAnswer = this.props.dogImage[2]
       
        return [randomAnswer1, randomAnswer2, correctAnswer]
    }

    mixAnswers = (answers) => {
        return [...answers].sort(() => Math.random() - 0.5)
    }

    checkAnswer = (event) => {
        if (event.target.src === this.state.answers[2]) {
            console.log(event.target.src, this.state.answers[2])
           return swal({
                text: "CORRECT!",
                buttons: "NEXT QUESTION",
                icon: "success"
            })
        }
        
        return swal({
            text: "Wrong!",
            buttons: "NEXT QUESTION",
            icon: "error"
        })
    }

    render() {        
        return (
            <div>
                <GameTwo
                    answers={this.state.answers}
                    image={this.mixAnswers}
                    checkAnswer={this.checkAnswer}
                    score={this.props.score}
                    total={this.props.total}
                    lives={this.props.lives}
                    title= {this.state.breeds}
                    mixAnswers={this.mixAnswers}
                />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        dogBreeds: state.randomBreeds.breeds,
        dogImage: state.randomBreeds.images,
        score: state.game1.score,
        total: state.game1.total,
        lives: state.game1.lives
    }
}

export default connect(mapStatetoProps, { getRandomBreed })(Game2Container)