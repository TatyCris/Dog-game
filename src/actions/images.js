import * as request from 'superagent'

export const SET_IMAGES = 'SET_IMAGES'

export function setImages(images) {
    return {
        type: SET_IMAGES,
        payload: images
    }
}

export function getImages(breed, num) {
    return function (dispatch) {
        request(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/${encodeURIComponent(num)}`)
            .then(response => {
                dispatch(setImages(response.body.message))
            })
            .catch(console.error)
    }
}

// export function setRandomImage(images) {
//     return {
//         type: SET_RANDOM_IMAGE,
//         payload: images
//     }
// }

// export function getRandomImage() {
//     return function (dispatch) {
//         request('https://dog.ceo/api/breeds/image/random')
//             .then(response => {
//                 dispatch(setRandomImages(response.body.message))
//             })
//             .catch(console.error)
//     }
// } 
