import * as request from 'superagent'

export const GET_RANDOM_IMAGES = 'GET_RANDOM_IMAGES'

export function setImage(image) {
    return {
        type: GET_RANDOM_IMAGES,
        payload: image
    }
}

export function getRandomImages() {
    return function (dispatch) {
        request('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                dispatch(setImage(response.body.message))
            })
            .catch(console.error)
    }
} 