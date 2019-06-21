import { SET_BREEDS } from '../actions/breeds'
import { SET_IMAGES } from '../actions/images'

const initialState = {
  breeds: [],
  images: [],
  loading: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BREEDS:
      return {
        ...state,
        breeds: [...action.payload]
      };
    case SET_IMAGES:
      return {
        ...state,
        images: action.payload,
        loading: false
      };
    case 'IS_LOADING':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}