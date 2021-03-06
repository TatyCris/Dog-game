import * as request from 'superagent'

export const SET_IMAGES = 'SET_IMAGES'

export function setImages(images) {
    return {
        type: SET_IMAGES,
        payload: images
    }
}

export function getImages(breeds, num, setLoading = false) {
    console.log('getImages test', breeds)
    const promises = breeds.map(breed => request.get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/${encodeURIComponent(num)}`))
    return dispatch => {
        if (setLoading) dispatch({ type: 'IS_LOADING' })
        
        Promise.all(promises)
            .then(response => {
                dispatch(setImages(response.map(response => {
                    // console.log('response', response.body.message);
                    return response.body.message
                } )))
            })
            .catch(console.error)
    }
}