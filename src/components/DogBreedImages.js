import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages (props) {
    const images = props.images
  return (
    <div className="dog-breed-images">
      <h1>{props.title}</h1>

      <br/><br/>
      <Link to="/">Go back to the index</Link>
      <div>
        { images && images.map((url, index) => <img src={ url } alt="Dog" key={index}/>) }
        { !images && 'Loading...' } 
      </div>
    </div>
  )
}