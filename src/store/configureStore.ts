import {combineReducers} from "@reduxjs/toolkit";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import weatherReducer from "./reducers/weatherReducer";
import alertReducer from "./reducers/alertReducer";

const configureStore = () => {
    const combinedReducers = combineReducers({
        weather: weatherReducer,
        alert: alertReducer
    });
    const store = createStore(
        combinedReducers,
        composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
};

export default configureStore;
