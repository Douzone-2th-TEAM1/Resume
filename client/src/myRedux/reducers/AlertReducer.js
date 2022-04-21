import { AlertActionType } from 'myRedux/constants';
const INIT_STATE = {
  status: false,
};

export default function AlertReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case AlertActionType.OPEN_ALERT:
      return {
        ...state,
        status: true,
      };

    case AlertActionType.CLOSE_ALERT:
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
}
