import { combineReducers } from 'redux'
import dogs from './dogs'
import game1 from './game1'
import game2 from './game2'
import randomBreeds from './randomBreeds'

export default combineReducers({
    dogs,
    game1,
    game2,
    randomBreeds
}) 