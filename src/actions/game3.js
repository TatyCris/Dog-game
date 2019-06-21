export const ADD_POINT_TO_SCORE = "ADD_POINT_TO_SCORE";

export const addPointToScore = () => {
    return {
        type: ADD_POINT_TO_SCORE,
        payload: 1
    };
};