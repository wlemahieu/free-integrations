import { combineReducers } from 'redux';
import chat from './chat';
import news from './news';

export default combineReducers({ chat, news });
