import { combineReducers } from 'redux'
import dogs from './dogs'
import game1 from './game1'
import answer from './answer'
import wrongAnswer from './wrongAnswers'

export default combineReducers({
    dogs,
    game1,
    answer,
    wrongAnswer
}) 