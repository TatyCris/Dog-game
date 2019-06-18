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

    componentDidUpdate(prevProps, nextProps) {
        if (prevProps.dogBreeds !== this.props.dogBreeds) {
            this.setAnswers()
        }
    }
    
    setAnswers() {
        this.setState({
            answers: this.getAnswers()
            
        }, () => {
            this.props.getImages(this.state.answers[2], 1)
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

        const answers = [randomAnswer1, randomAnswer2, correctAnswer]
        // const imageQuestion = this.props.dogBreeds.find(breed => breed === answers[2])
        // console.log('image', imageQuestion);

        return answers
    }

    mixAnswers = () => {
        return this.state.answers.sort(() => Math.random() - 0.5);
    }

    render() {
        return (
            <div>
                <GameOne answers={this.mixAnswers()} image={this.props.dogImages} />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        dogBreeds: state.dogs.breeds,
        dogImages: state.dogs.images
    }
}

export default connect(mapStatetoProps, { getImages, getBreeds })(Game1Container)
// export default connect (mapStatetoProps, { getBreedImages })(DogBreedImagesContainer)
