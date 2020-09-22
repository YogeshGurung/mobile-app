import { combineReducers, createStore } from "redux";
import listingsReducer from "./listings";
import viewReducer from "./view";
import myAdsReducer from "./myads";
import bookmarksReducer from "./bookmarks";

const reducers = combineReducers({
    listings: listingsReducer,
    view: viewReducer,
    myAds: myAdsReducer,
    bookmarks: bookmarksReducer
})

export default createStore(reducers);