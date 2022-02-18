import  {createStore, combineReducers} from "redux";
import {userReducer} from "./userReducer";

//for now only user data slice in the reducer
// const rootReducer = combineReducers({
//     userData: userReducer
// })

const store = createStore(userReducer);

export default store;