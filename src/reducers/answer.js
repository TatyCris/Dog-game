
import { RANDOM_BREED } from '../actions/randomBreed'


const initialState = {}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case RANDOM_BREED:
            return {
                ...action.payload
            };
        default:
            return state
    }
}