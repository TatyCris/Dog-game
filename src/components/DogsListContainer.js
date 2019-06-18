import React, { Component } from 'react'
import DogsList from './DogsList';
import { connect } from 'react-redux'
import { getBreeds } from '../actions/breeds'
import Button from './'

class DogsListContainer extends Component {
    static propTypes = {
        content: propTypes.string.isRequired,
      }
    componentDidMount() {
        this.props.getBreeds()
    }

    render() {
        return (
            <div>
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