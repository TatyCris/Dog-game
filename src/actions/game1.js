export const ANSWERS = 'ANSWERS'
export const ADD_POINT_TO_SCORE = "ADD_POINT_TO_SCORE";

export const getAnswers = (answers) => {
    return {
        type: ANSWERS,
        payload: [...answers]
    }
}

export const addPointToScore = () => {
    return {
        type: ADD_POINT_TO_SCORE,
        payload: 1
    };
};