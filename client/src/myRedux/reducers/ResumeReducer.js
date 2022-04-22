import { ResumeActionType } from 'myRedux/constants';
const INIT_STATE = {};

export default function ResumeReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ResumeActionType.ENROLL_INFO:
      return {
        ...state,
        info: action.info,
      };

    default:
      return state;
  }
}
