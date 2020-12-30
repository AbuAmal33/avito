import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import photosReducer from "./photos";
import modalsReducer from "./modals";

const logger = createLogger ({
    diff: true,
    collapsed: true
});

const rootReducer = combineReducers({
    photos: photosReducer,
    modals: modalsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;