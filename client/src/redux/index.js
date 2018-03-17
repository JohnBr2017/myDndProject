import { combineReducers, createStore, applyMiddleware } from "redux";
import spells from "./spells";
import players from "./players"
import thunk from "redux-thunk";

const store = createStore(
    combineReducers({spells, players}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;