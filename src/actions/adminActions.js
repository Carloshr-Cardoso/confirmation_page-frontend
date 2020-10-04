import { apiPost, apiGet, apiPut, apiDelete } from '../helpers/api';

export const SIGN_UP = 'SIGN_UP';
export const CREATE_INVITED = 'CREATE_INVITED';
export const LIST_INVITED = 'LIST_INVITED';
// export const PUT_CONFIRMED = 'PUT_CONFIRMED';
// export const CLEAR_CONFIRMED = 'CLEAR_CONFIRMED';
// export const DELETE_INVITED = 'DELETE_INVITED';
// export const CLEAR_DELETE_INVITED = 'CLEAR_DELETE_INVITED';
// export const GET_ALL_CONFIRMEDS = 'GET_ALL_CONFIRMEDS';


export const signUp = (data) =>{
  const payload = apiPost('/auth/sign-up', data);
  return {type: SIGN_UP, payload: payload}
};

export const listConvidados = () =>{
    const payload = apiGet('/confirmed/admin/convidados');
    return {type: LIST_INVITED, payload: payload};
}

// export const editConfirmado = (data, id) =>{
//     const payload = apiPut(`/confirmed/${id}`, data);
//     return {type: PUT_CONFIRMED, payload: payload};
// }


// export const deleteConfirmed = (id) =>{
//     const payload = apiDelete(`/confirmed/${id}`);
//     return {type: DELETE_CONFIRMED, payload: payload};
// }

// export const clearConfirmado = () =>{
//     return {type: CLEAR_CONFIRMED, payload:{}};
// }

// export const clearDeleteConfirmed = () =>{
//     return {type: CLEAR_DELETE_CONFIRMED, payload:{}};
// }