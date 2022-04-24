import { ResumeActionType } from 'myRedux/constants';
const INIT_STATE = {};

export default function ResumeReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ResumeActionType.ENROLL_INFO:
      return {
        ...state,
        info: action.info,
      };

    case ResumeActionType.TEMP_INFO:
      return {
        ...state,
        getTemp: action.getTemp,
      };

    case ResumeActionType.SETTED_TEMP_INFO:
      return {
        ...state,
        getTemp: action.getTemp,
      };
    default:
      return state;
  }
}
