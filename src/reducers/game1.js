import { ANSWERS } from '../actions/game1'

const initialState = {
    answers: '',
    score: 0,
    total: 0,
    lives: 3
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ANSWERS:
            return {
                ...state,
                answers: action.payload
            }
        default:
            return state
    }
}