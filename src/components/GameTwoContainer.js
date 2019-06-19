import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { getBreeds } from '../actions/breeds'
import{getRandomBreed} from '../actions/randomBreed'
import GameTwo from './GameTwo'

class GameTwoContainer extends Component {
    
    componentDidMount() {
       this.props.getRandomBreed()
    }
 
    render() {
 
        return (
        
            <div>
            
            <GameTwo image={this.props.image} title={this.props.breed} />
    
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
  
    
    return {...state.answer}
        
    
  }
  
  export default connect (mapStatetoProps, { getRandomBreed })(GameTwoContainer)
