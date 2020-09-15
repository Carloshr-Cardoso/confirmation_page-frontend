import { SIGN_IN } from './signInActions';
import { setAccount, setToken, setRefreshToken } from '../../helpers/account';

const initialState = {
    account: null,
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SIGN_IN:
            const response = payload ? payload.data : null;
            const account = response ? response.data : null;
            const metadata = response ? response.metadata : null;
            
            const token = metadata ? metadata.token : null;
            const refreshToken = metadata ? metadata.refreshToken : null;

            if (account) setAccount(account);
            if (token) setToken(token);
            if (refreshToken) setRefreshToken(refreshToken);

            return {...initialState, account }
        default:
            return state;
    }
}