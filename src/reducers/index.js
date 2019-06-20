import { combineReducers } from 'redux'
import dogs from './dogs'
import game1 from './game1'
import randomBreeds from './randomBreeds'


export default combineReducers({
    dogs,
    game1,
    randomBreeds
}) 