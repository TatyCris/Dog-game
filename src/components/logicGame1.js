const breeds = ['affenpinscher', 'african', 'bluetick', 'borzoi', 'dhole']

function chooseRamdomBreed(breeds) {
    return breeds[Math.floor(Math.random() * breeds.length)]
}

function getAnswers(breeds) {
    const randomAnswer1 = chooseRamdomBreed(breeds)
    let randomAnswer2 = chooseRamdomBreed(breeds)
    let correctAnswer = chooseRamdomBreed(breeds)

    while (randomAnswer1 === randomAnswer2) {
        randomAnswer2 = chooseRamdomBreed(breeds)
    }
    while (randomAnswer2 === correctAnswer) {
        correctAnswer = chooseRamdomBreed(breeds)
    }
    while (randomAnswer1 === correctAnswer) {
        correctAnswer = chooseRamdomBreed(breeds)
    }

    const answers = [randomAnswer1, randomAnswer2, correctAnswer]
    const imageQuestion = breeds.find(breed => breed === answers[2])
    console.log('image', imageQuestion);

    return answers
}

function mixAnswers(answers) {
    return shuffledAnswers = answers.sort(() => Math.random() - 0.5);
}

console.log('mixed', mixAnswers(getAnswers(breeds)));