import {createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';
import accountReducer from './reducers/accountReducer';
import confirmedReducer from './reducers/confirmedReducer';

const reducers = combineReducers({
    account: accountReducer,
    confirmado: confirmedReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;