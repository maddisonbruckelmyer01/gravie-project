import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const search = (state = [], action) => {
    if(action.type === 'SET_GAME') {
        return action.payload;
    }
    return state;
}

const rented = (state = [], action) => {
    if (action.type === 'SET_RENTED') {
        return [...state, action.payload]
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        search,
        rented,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
