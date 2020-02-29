import { combineReducers, createStore } from "redux";

import logInOut from "./loginout-reducer";
import headerReducer from "./header-reducer";

let reducers = combineReducers({
  
    users: logInOut,
    header: headerReducer,
});

let store = createStore(reducers);



export default store;