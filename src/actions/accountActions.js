import { apiPost, apiPut } from '../helpers/api';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_UP';
export const EDIT_CONFIRMADO = 'EDIT_CONFIRMADO';

export const signIn = (data) =>{
    const payload = apiPost('/auth/sign-in', data);
    return {type: SIGN_IN, payload: payload}
};

export const signUp = (data) =>{
    const payload = apiPost('/auth/sign-up', data);
    return {type: SIGN_UP, payload: payload}
};

export const signOut = () =>{
    return {type: SIGN_OUT, payload:{}}
};

export const editConfirmado = (data) =>{
    const payload = apiPut('/auth/edit/', data)
    return {type: EDIT_CONFIRMADO, payload: payload}
}
