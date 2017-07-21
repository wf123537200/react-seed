import thunkMiddleware from 'redux-thunk';
import {createStore, compose, applyMiddleware } from 'redux';

export const initStore = function (reducers, initState) {
    return createStore(reducers, initState, compose(applyMiddleware(thunkMiddleware)));
};