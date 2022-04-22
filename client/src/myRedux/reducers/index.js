import { combineReducers } from 'redux';
import ResumeReducer from './ResumeReducer';
import AlertReducer from './AlertReducer';
const rootReducer = combineReducers({
  ResumeReducer,
  AlertReducer,
});

export default rootReducer;
