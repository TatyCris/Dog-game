const superagent = require('superagent')

superagent
    .get('https://dog.ceo/api/breeds/image/random')
    .then(response => console.log('here', response.body))
    .catch(console.error)