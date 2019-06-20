import * as request from 'superagent'

export const RANDOM_BREED = 'RANDOM_BREED'

function chooseRandomBreed(breeds) {
    const myBreed = breeds[Math.floor(Math.random() * breeds.length)]
    const mySecondBreed = breeds[Math.floor(Math.random() * breeds.length)]
    const myThirdBreed = breeds[Math.floor(Math.random() * breeds.length)]
    return [myBreed, mySecondBreed, myThirdBreed]
}


function setRandomBreed(payload) {
    return {
        type: RANDOM_BREED,
        payload
    }
}

function getRandomImage(breed) {
    const url = `https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random`
    return request(url)
        .then(response => {
            const message = response.body.message
            console.log(message)
            return message
        })
}

// export function getRandomBreed() {
//     return function (dispatch) {
//         request('https://dog.ceo/api/breeds/list/all')
//             .then(response => {
//                 const { message } = response.body
//                 //const breeds = Object.keys(message)
//                 //const breed = chooseRandomBreed(breeds)
//                 //const promise = getRandomImage(breed)
//                 const breeds = ['akita', 'maltese', 'akita']
//                 const promises = ['akita', 'maltese', 'akita'].map(breed=>getRandomImage(breed))
//                 return Promise.all(promises).then(imgurls => ({ imgurls, breeds }))
//             })
//             .then(data => {
//                 console.log(data.imgurls, data.breeds, 'data from promise')
//                 const action = setRandomBreed(data)
//                 dispatch(action)
//             })
//             .catch(console.error)
//     }
// } 

export function getRandomBreed() {
    return async function (dispatch) {
        try {
            const response = await request('https://dog.ceo/api/breeds/list/all')
            const { message } = response.body
            const breed = Object.keys(message)
            console.log(breed.length)
            console.log(chooseRandomBreed(breed))
            const imgUrls = await Promise.all(['akita', 'maltese', 'akita'].map(breed => getRandomImage(breed)))
            console.log(imgUrls)
            dispatch()
        } catch (error) {
            console.error(error)
        }
        // .then(response => {
        //     //const breeds = Object.keys(message)
        //     //const breed = chooseRandomBreed(breeds)
        //     //const promise = getRandomImage(breed)
        //     const breeds = ['akita', 'maltese', 'akita']
        //     return Promise.all(promises).then(imgurls => ({ imgurls, breeds }))
        // })
        // .then(data => {
        //     console.log(data.imgurls, data.breeds, 'data from promise')
        //     const action = setRandomBreed(data)
        //     dispatch(action)
        // })
        // .catch(console.error)
    }
} 