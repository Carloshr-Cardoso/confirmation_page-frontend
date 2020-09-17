import { GET_CONFIRMED_BY_ID, CREATE_CONFIRMED } from '../actions/confirmedActions';
import { getAccount, getToken, getRefreshToken } from '../helpers/account';

const initialState = {
    confirmados: null,
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_CONFIRMED_BY_ID:
            const account = getAccount();
            console.log(account);
        
        case CREATE_CONFIRMED:
            const response = payload ? payload.data : null;
            const account = response ? response.data : null;
            const metadata = response ? response.metadata : null;
            
            const token = metadata ? metadata.token : null;
            const refreshToken = metadata ? metadata.refreshToken : null;

            if (account) setAccount(account);
            if (token) setToken(token);
            if (refreshToken) setRefreshToken(refreshToken);

            return {...state, account };

        default:
            return state;
    }
}
