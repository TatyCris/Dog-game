import * as request from 'superagent'

export const RANDOM_BREED = 'RANDOM_BREED'

function chooseRandomBreed(breeds) {
    return breeds[Math.floor(Math.random() * breeds.length)]
}

function setRandomBreed (payload) {
    return {
        type: RANDOM_BREED,
        payload
    }
}

function getRandomImage (breed) {
    const component = encodeURIComponent(breed)
    const url = `https://dog.ceo/api/breed/${component}/images/random`
    
    return request(url)
        .then(response => {
            const { message } = response.body
            
            return {
                image: message,
                breed
            }
        })
}

export function getRandomBreed() {
    return function (dispatch) {
        request('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const { message } = response.body
                const breeds = Object.keys(message)
                const breed = chooseRandomBreed(breeds)

                const promise = getRandomImage(breed)
                return promise
            })
            .then(data => {
                const action = setRandomBreed(data)
                dispatch(action)
            })
            .catch(console.error)
    }
} 