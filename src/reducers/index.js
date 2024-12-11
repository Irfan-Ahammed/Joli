import {combineReducers} from 'redux';
import GeneralReducer from './GeneralReducer';

export default combineReducers({
  generalState: GeneralReducer,//reducer state an return cheyya
});
