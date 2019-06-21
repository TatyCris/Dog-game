import {
    ADD_POINT_TO_SCORE,
} from '../actions/game3'

const initialState = {
    score: 0,
    total: 0,
    lives: 3
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_POINT_TO_SCORE:
            return {
                ...state,
                score: state.score + action.payload
            }
        default:
            return state
    }
}