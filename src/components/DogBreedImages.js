import React from 'react'
import { Link } from 'react-router-dom'
import Image from './Image'
import Button from './Button'
import './DogBreedImages.css'

export default function DogBreedImages(props) {
  console.log('DogBreedImages props test:', props)
  const { images } = props

  return (
      <div className="dog-breed-images">
        <h1>Meet {props.title}</h1>
        <Link to={`/`}><Button title="Go back" /></Link>
        <div className="images-container">
          {images && <Image breed={[props.breed]} num={10} />}
        </div>
      </div>
    )
}