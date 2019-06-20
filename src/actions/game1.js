export const ANSWERS = 'ANSWERS'

export const getAnswers = (answers) => {
    return {
        type: ANSWERS,
        payload: [...answers]
    }
}