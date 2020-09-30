import { apiPost, apiGet, apiPut } from '../helpers/api';

export const GET_CONFIRMED_BY_ID = 'GET_CONFIRMED_BY_ID';
export const CREATE_CONFIRMED = 'CREATE_CONFIRMED';
export const LIST_CONFIRMED = 'LIST_CONFIRMED';
export const PUT_CONFIRMED = 'PUT_CONFIRMED';
export const CLEAR_CONFIRMED = 'CLEAR_CONFIRMED';

    
export const getConfirmadoById = (id) =>{
    const payload = apiGet(`/confirmed/${id}`);
    return {type: GET_CONFIRMED_BY_ID, payload: payload};
}

export const createConfirmado = (data) =>{
    const payload = apiPost('/confirmed', data);
    return {type: CREATE_CONFIRMED, payload: payload};
}

export const listConfirmados = () =>{
    const payload = apiGet('/confirmed');
    return {type: LIST_CONFIRMED, payload: payload};
}

export const editConfirmado = (data, id) =>{
    const payload = apiPut(`/confirmed/${id}`, data);
    return {type: PUT_CONFIRMED, payload: payload}
}

export const clearConfirmado = () =>{
    return {type: PUT_CONFIRMED, payload:{}}
}