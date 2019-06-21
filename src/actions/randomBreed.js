import * as request from 'superagent'

export const RANDOM_BREED = 'RANDOM_BREED'

function chooseRandomBreed(breeds) {
    const n = [Math.floor(Math.random() * breeds.length)]
    const myBreed = breeds[n]
    const secondBreedArray = breeds.filter(secondBreed=> secondBreed !== myBreed)
    const myThirdBreed = secondBreedArray.filter(thirdbreed=> thirdbreed !== secondBreedArray[n])
    return [myBreed, secondBreedArray[n], myThirdBreed[n]]
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