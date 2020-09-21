import { GET_CONFIRMED, CREATE_CONFIRMED } from '../actions/confirmedActions';
import { getAccount, getToken, getRefreshToken } from '../helpers/account';

const initialState = {
    confirmado: null
}

export default function(state=initialState, action){
    const { type, payload } = action
    switch (type) {
        case CREATE_CONFIRMED:
            const response = payload ? payload.data : null;
            const confirmado = response ? response.data : null;
            
            return {...state, confirmado}

        case GET_CONFIRMED:
            console.log(payload);
            const confirmados = payload ? payload.data : null;
            //const confirmado = response ? response.data : null;
            
            return {...state, confirmados}
        default:
            return state
    }
}