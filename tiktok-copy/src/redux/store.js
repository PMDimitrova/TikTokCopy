import  {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {userReducer} from "./reducers/userReducer";
import {allVideoReducer} from "./reducers/allVideosReducer";
import {default as ReduxThunk } from 'redux-thunk';
import {singLoginReducer} from "./reducers/singLoginReducer";
import { allUsersReducer } from "./reducers/allUsersReducer";

const rootReducer = combineReducers({
    userData: userReducer,
    allVideoData: allVideoReducer,
    singLoginData: singLoginReducer,
    allUsersData: allUsersReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

//uncomment if you want to use redux dev tools in browser environment:
// const store = createStore(
//     rootReducer, compose(applyMiddleware(ReduxThunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


export default store;