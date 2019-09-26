# Dog Game
Game project in which users can view 10 images of any dog breed and play 3 different games.

## Table of contents

- [Intro](#Intro)
- [Technologies used](#Technologies-used)
- [Goals for this project](#Goals-for-this-project)
- [Setup](#Setup)
- [Create React App](#Create-React-App)

## Intro
This is a React app game for the Dog Game real-world team project - which was built during week 4 at the Codaisseur Academy. For this project was applied Agile methodogy and Scrum principles.

**[Check out the basic wireframe here!](https://sketch.cloud/s/oLZdx)**
**[Check out the deployed app here!](https://pick-a-dog.netlify.com/)**

## Technologies used
- React
- Redux
- CSS

## Goals for this project
- [x] The app should have a dog list page where it lists all the breeds, so the user can memorise the names of all the breeds. 
- [x] When you click one of the breeds on the doglist page you should go to a page that shows 10 pictures of that breed. So the user can see what a breed looks like.
- [x] The app contains a game which must show the user a random picture of a dog and it must ask the user to choose the correct breed name from a list of 3 options. 
- [x] When a user makes the correct choice, they proceed to the next question.
- [x] If the user makes the wrong choice, the game should show them the right answer, then pause for 2 seconds before proceeding to the next question.
- [x] The game must keep track of the user's performance and display a success rate (in percentages) on the page.
- [x] The app contains a second game where the user will get a different question type. This game must show the user the name of a breed and 3 images of dogs. The user must select the correct image that matches the breed name.
- [+/-] The app contains a third game that alternates the combines the 2 other games: sometimes it shows a picture and 3 breednames and sometimes it shows a breedname and 3 pictures. (a mix of features 3 & 7)
- [ ] The user should also be able to use the keyboard to select their answer for quicker gameplay.
- [ ] If a user sees a breed for the first time, the game should give them an easy hint so they can learn the right answer.
- [ ] The game starts off with only 3 breeds and should gradually increase in difficulty. When the user has a streak of 5 correct answers, the game will add another 3 breeds into the mix, and so on.

## Setup
- git clone
```bash
$ git clone https://github.com/TatyCris/Dog-game.git
```

- npm install
```bash
$ npm install
```

- npm start
```bash
$ npm start
```

## Create React App
This project was scaffolded using the create-react-app cli. 

**[The standard create-react-app docs can be found in here](https://github.com/facebook/create-react-app)**
