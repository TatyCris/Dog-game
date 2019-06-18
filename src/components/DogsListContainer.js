import React, { Component } from 'react'
import DogsList from './DogsList';
import { connect } from 'react-redux'
import { getBreeds } from '../actions/breeds'
import Button from './Button'

class DogsListContainer extends Component {

    componentDidMount() {
        this.props.getBreeds()
    }

    render() {
        return (
            <div>
                <Button onclick="">Play game 1</Button>
                <Button onclick="">Play game 2</Button>
                <Button onclick="">Play game 3</Button>
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