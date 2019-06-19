import { NEXT_QUESTION } from '../actions/game1'

const initialState = {
    question: "",
    correctAnswer: "",
    answers: [],
    score: 0,
    total: 0,
    lives: 3
};
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case NEXT_QUESTION:
            return {
                ...state,
                answers: action.payload
            }
        default:
            return state
    }
}