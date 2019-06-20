import * as request from 'superagent'

export const RANDOM_BREED = 'RANDOM_BREED'

function chooseRandomBreed(breeds) {
    const myBreed = breeds[Math.floor(Math.random() * breeds.length)]
    return myBreed
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
        .then(response => {
            const message = response.body.message
            console.log(message)
                return message
        })
}

export function getRandomBreed() {
    return function (dispatch) {
        request('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const { message } = response.body
                //const breeds = Object.keys(message)
                //const breed = chooseRandomBreed(breeds)
                //const promise = getRandomImage(breed)
                const breeds = ['akita', 'maltese', 'akita']
                const promise = message.map(breed=>getRandomImage(breed))
                const myData = [promise, breeds]
                console.log(myData, 'myData')
                return myData
            })
            .then(data => {
                const action = setRandomBreed(data)
                dispatch(action)
            })
            .catch(console.error)
    }
} 