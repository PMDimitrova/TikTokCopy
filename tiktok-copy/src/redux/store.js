import  {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {userReducer} from "./reducers/userReducer";
import {allVideoReducer} from "./reducers/allVideosReducer";
import {default as ReduxThunk } from 'redux-thunk';
import {singLoginReducer} from "./reducers/singLoginReducer";
// import logger from 'redux-logger'

//for now only user data slice in the reducer
const rootReducer = combineReducers({
    userData: userReducer,
    allVideoData: allVideoReducer,
    singLoginData: singLoginReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;