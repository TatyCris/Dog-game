import React, { Component } from 'react'
import DogsList from './DogsList';
import { connect } from 'react-redux'
import { getBreeds } from '../actions/breeds'
import Button from './Button'
import Title from './Title'
import { Link } from 'react-router-dom'

class DogsListContainer extends Component {

    componentDidMount() {
        this.props.getBreeds()
    }

    clicked = () => {

    }
    render() {
        return (
            <div>
                <Title content="Wello from DogsList component :)" />
                <Link to={`/game1`}><Button title="Play game 1" /></Link>
                <Link to={`/game2`}><Button title="Play game 2" /></Link>
                <Link to={`/game3`}><Button title="Play game 3" /></Link>
                <DogsList dogBreeds={this.props.dogBreeds} />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        dogBreeds: state.dogs.breeds
    }
}

export default connect(mapStatetoProps, { getBreeds })(DogsListContainer)