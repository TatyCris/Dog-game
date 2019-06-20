
export const GET_ANSWER = 'GET_ANSWER'


export function getUsersAnswer(guessedAnswer) {
    return {
        type: GET_ANSWER,
        payload: guessedAnswer
    }
}
