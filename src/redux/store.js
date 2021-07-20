import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';



//createStore method accepts a reducer function as its parameter
//here we created the store, but we have to provide it to the react application => we'll use a provider in App.js
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store
