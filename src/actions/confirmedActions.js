import { apiPost, apiGet } from '../helpers/api';

export const GET_CONFIRMED_BY_ID = 'GET_CONFIRMED_BY_ID';
export const CREATE_CONFIRMED = 'CREATE_CONFIRMED';

export const getConfirmadosById = (id) =>{
    const payload = apiGet(`/confirmed/${id}`)
    return {type: GET_CONFIRMED_BY_ID, payload: payload};
}

export const createConfirmado = (data) =>{
    const payload = apiPost('/confirmed', data);
    return {type: CREATE_CONFIRMED, payload: payload}
}