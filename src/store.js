import {createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';
import accountReducer from './reducers/accountReducer';

const reducers = combineReducers({
    account: accountReducer
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;