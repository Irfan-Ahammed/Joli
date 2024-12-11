import {GeneralAction} from '../actions';

const initialState = {
  isAppLoading: true,
  token: '', //signup or login cheyumbo kittunna token
};

const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case GeneralAction.type.SET_IS_APP_LOADING:
      return {...state, isAppLoading: action.payload}; //immutable ayirikkanam and fresh
    case GeneralAction.type.SET_TOKEN:
      return {...state, token: action.payload};
    default:
      return state;
  }
};

export default GeneralReducer;
