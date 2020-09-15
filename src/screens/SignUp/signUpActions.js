import {apiPost} from '../../helpers/api';

export const SIGN_UP = 'SIGN_UP';

export const signUp = (data) =>{
    //Fazer Requisição na API
    const payload = apiPost('/auth/sign-up', data);
    return {type: SIGN_UP, payload: data}
};