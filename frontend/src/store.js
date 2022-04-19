import {createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { userLoginReducer } from "./reducers/userReducers";



const reducer = combineReducers({
    // this will contain all our reducers
    userLogin : userLoginReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    
);


export default store;


// https://www.youtube.com/watch?v=ZOIdBWPydZY&list=PLKhlp2qtUcSYC7EffnHzD-Ws2xG-j3aYo&index=11&t=45s