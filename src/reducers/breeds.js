import { SET_BREEDS } from '../actions/breeds'
import { SET_IMAGES } from '../actions/oneBreed'

export default (state = [], action = {}) => {
    switch (action.type) {
        case SET_BREEDS:
            return action.payload
        case SET_IMAGES:
            return [...action.payload]
        default:
            return state;
    }
}

