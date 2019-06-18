import * as request from 'superagent'

export const SET_BREEDS = 'SET_BREEDS'


export function setBreeds(breeds) {
    return {
        type: SET_BREEDS,
        payload: breeds
    }
}

export function getBreeds() {
    return function (dispatch) {
        request('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                dispatch(setBreeds(Object.keys(response.body.message)))
            })
    }
} 