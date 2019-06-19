import { GET_ANSWER } from '../actions/answer'

export default (state = '', action = {}) => {
    switch (action.type) {
        case GET_ANSWER:
            return action.payload
        default:
            return state;
    }
}

