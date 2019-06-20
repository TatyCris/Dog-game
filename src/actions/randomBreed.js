import * as request from 'superagent'

export const RANDOM_BREED = 'RANDOM_BREED'

function chooseRandomBreed(breeds) {
    const myBreed = breeds[Math.floor(Math.random() * breeds.length)]
    const mySecondBreed = breeds[Math.floor(Math.random() * breeds.length)]
    const myThirdBreed = breeds[Math.floor(Math.random() * breeds.length)]
    return [myBreed, mySecondBreed, myThirdBreed]
}


function setRandomBreed (payload) {
    return {
        type: RANDOM_BREED,
        payload
    }
}

function getRandomImage (breed) { 
    const url = `https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random`
    return request(url)
        .then(response => {
            const message = response.body.message
                return message
        })
}

export function getRandomBreed() {
    return async function (dispatch) {
        try {
            const response = await request('https://dog.ceo/api/breeds/list/all')
            const { message } = response.body
            const breed = Object.keys(message)
            const arrayOfBreeds = chooseRandomBreed(breed)
            const imgUrls = await Promise.all(arrayOfBreeds.map(breed=>getRandomImage(breed)))
            const data = {images: imgUrls, breeds: arrayOfBreeds}
            dispatch(setRandomBreed(data)) 
        } catch(error) {
            console.error(error)
        }  
    }
} 