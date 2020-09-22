import { combineReducers, createStore } from "redux";
import listingsReducer from "./listings";
import viewReducer from "./view";
import myAdsReducer from "./myads";

const reducers = combineReducers({
    listings: listingsReducer,
    view: viewReducer,
    myAds: myAdsReducer,
})

export default createStore(reducers);