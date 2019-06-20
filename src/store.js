import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'
import { save, load } from "redux-localstorage-simple"

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

const enhancer = compose(
    applyMiddleware(ReduxThunk),
    devTools
)

const createStoreWithMiddleware 
    = applyMiddleware(
        save())
 (createStore(reducer, enhancer))

export default createStoreWithMiddleware