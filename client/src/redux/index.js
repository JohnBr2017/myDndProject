import { combineReducers, createStore, applyMiddleware } from "redux";
import spells from "./spells";
import players from "./players"
import thunk from "redux-thunk";
import user from './auth';

const store = createStore(
    combineReducers({spells, players, user}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;