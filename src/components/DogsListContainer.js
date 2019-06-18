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
                <h1>Hello from DogsList component :)</h1>   {/* Replace this with a title component */}
                <Button title="Play game 1" onclick="" />
                <Button title="Play game 2" onclick="" />
                <Button title="Play game 3" onclick="" />
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