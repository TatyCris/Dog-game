import React, { Component } from 'react'
import GameTwo from './GameTwo';
import { connect } from 'react-redux'
import { getImages } from '../actions/images'
import { getBreeds } from '../actions/breeds'
import swal from "sweetalert";


class Game2Container extends Component {
    state = { answers: [], images: [] }

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

    getMyArray = () => {
        this.state.answers.map(b => {
            const oneIMAGE = this.props.getImages(b, 1)
            // console.log(oneIMAGE, b, 'oneIMAGE')
            return oneIMAGE
        })
    }

    render() {
        const hasImage = this.props.dogImage.length;
        if (!hasImage && this.state.answers.length) {
            console.log('ANSWERS ',this.state.answers)
            this.state.answers.map(breed => {
                const img = this.props.getImages(breed, 1)
                
            })
        }

        return (
            <div>
                {/* {console.log(this.props.dogImage, 'image')} */}
                <GameTwo
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

export default connect(mapStatetoProps, { getImages, getBreeds })(Game2Container)