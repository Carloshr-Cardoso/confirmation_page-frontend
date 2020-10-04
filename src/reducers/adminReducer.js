import {SIGN_UP, LIST_INVITED} from '../actions/adminActions';


const initialState = {
  account: null,
  convidados: [],
  confirmados: [],
}

export default function(state=initialState, action){
  const { type, payload } = action
  switch (type) {
    case SIGN_UP: {
      const response = payload ? payload.data : null;
      const account = response ? response.data : null;

      return {...state, account };
    }
    case LIST_INVITED: {
        const response = payload ? payload.data : null;
        const convidados = response ? response.data : null;
        
        return {...state, convidados}
    }
    default:
      return state
  }
}