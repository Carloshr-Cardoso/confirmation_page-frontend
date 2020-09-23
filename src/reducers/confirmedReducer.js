import { LIST_CONFIRMED, CREATE_CONFIRMED } from '../actions/confirmedActions';

//import { getAccount, getToken, getRefreshToken } from '../helpers/account';

const initialState = {
    confirmado: null,
    confirmados: []
}

export default function(state=initialState, action){
    const { type, payload } = action
    switch (type) {
        case CREATE_CONFIRMED: {
            const response = payload ? payload.data : null;
            const confirmado = response ? response.data : null;
            
            return {...state, confirmado}
        }
        case LIST_CONFIRMED: {
            const response = payload ? payload.data : null;
            const confirmados = response ? response.data : null;
            //console.log(confirmados);
            
            //console.log(payload);
            //const confirmado = response ? response.data : null;
            
            return {...state, confirmados}
        }
        default:
            return state
    }
}