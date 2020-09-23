import { combineReducers, createStore } from "redux";
import listingsReducer from "./listings";
import viewReducer from "./view";

const reducers = combineReducers({
    listings: listingsReducer,
    view: viewReducer,
})

export default createStore(reducers);