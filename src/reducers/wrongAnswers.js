
import { GET_RANDOM_IMAGES } from '../actions/randomImages'

const initialState = []

export default (state = initialState, action = {}) => {
    switch (action.type) {
       
        case GET_RANDOM_IMAGES:
            return [...state, action.payload]
        default:
            return state
    }
}