import  {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {userReducer} from "./reducers/userReducer";
import {allVideoReducer} from "./reducers/allVideosReducer";
import {default as ReduxThunk } from 'redux-thunk';
import {singLoginReducer} from "./reducers/singLoginReducer";
import { allUsersReducer } from "./reducers/allUsersReducer";
// import logger from 'redux-logger'

//for now only user data slice in the reducer
const rootReducer = combineReducers({
    userData: userReducer,
    allVideoData: allVideoReducer,
    singLoginData: singLoginReducer,
    allUsersData: allUsersReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// const store = createStore(
//     rootReducer, compose(applyMiddleware(ReduxThunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


export default store;