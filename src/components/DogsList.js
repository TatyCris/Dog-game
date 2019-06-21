import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogsList.css'

export default class DogsList extends Component {
    renderDogBreed(breed) {
        return (
            <li key={breed}>
                <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
            </li>
        )
    }

    render() {
        const { dogBreeds } = this.props
        return (
            <div className="dogs-list" >
                <h2>Get to know the breeds</h2>
                {!dogBreeds && 'Loading...'}
                {dogBreeds && <ul>{dogBreeds.map(this.renderDogBreed)}</ul>}
            </div>
        )
    }
}