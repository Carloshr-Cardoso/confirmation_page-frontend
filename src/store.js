import {createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';
import signInReducer from './screens/SignIn/signInReducer';
import signUpReducer from './screens/SignUp/signUpReducer';

const reducers = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;