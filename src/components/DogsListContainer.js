import React, { Component } from 'react'
import DogsList from './DogsList';
import { connect } from 'react-redux'
import { getBreeds } from '../actions/breeds'
import Button from './Button'
import Title from './Title'

class DogsListContainer extends Component {

    componentDidMount() {
        this.props.getBreeds()
    }

    clicked = () => {

    }
    render() {
        return (
            <div>
                <Title content="Wello from DogsList component :)"/>
                <Button title="Play game 1" onclick={this.clicked} />
                <Button title="Play game 2" onclick={this.clicked} />
                <Button title="Play game 3" onclick={this.clicked} />
                <DogsList dogBreeds={this.props.dogBreeds} />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        dogBreeds: state.breeds
    }
}

export default connect (mapStatetoProps, { getBreeds })(DogsListContainer)