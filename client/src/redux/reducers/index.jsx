import { combineReducers } from 'redux';
import chatInput from './chatInput';
import conversation from './conversation';

export default combineReducers({ chatInput, conversation });
