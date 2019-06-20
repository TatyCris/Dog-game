import React from 'react'
import { Link } from 'react-router-dom'
import Image from './Image'


export default function DogBreedImages (props) {
    const images = props.images
    
  return (
    <div className="dog-breed-images">
      <h1>{props.title}</h1>

      <br/><br/>
      <Link to="/">Go back to the index</Link>
      <div>
        { images && <Image breed={[props.breed]} num={10} /> }
        { !images && 'Loading...' } 
      </div>
    </div>
  )
}