import * as request from 'superagent'

export const SET_IMAGES = 'ONE_BREED'


export function setBreedImages(images) {
    return {
        type: SET_IMAGES,
        payload: images
    }
}
//`https://dog.ceo/api/breed/${encodeURIComponent(myBreed)}/images`
//`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/10`
export function getBreedImages(breed) {
    return function (dispatch) {
        request(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/10`)
            .then(response => {
                dispatch(setBreedImages(response.body.message))
            })
            .catch(console.error)
    }
} 