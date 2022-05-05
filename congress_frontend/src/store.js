import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// REDUCERS

import searchReducer from './reducers/searchReducer.js';

const reducers = combineReducers({
    searchReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;