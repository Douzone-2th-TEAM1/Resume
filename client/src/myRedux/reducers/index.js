import { combineReducers } from 'redux';
import ResumeReducer from './ResumeReducer';
import AlertReducer from './AlertReducer';
import CommunicationReducer from './CommunicationReducer';
import ModalReducer from './ModalReducer';

const rootReducer = combineReducers({
  ResumeReducer,
  AlertReducer,
  CommunicationReducer,
  ModalReducer,
});

export default rootReducer;
