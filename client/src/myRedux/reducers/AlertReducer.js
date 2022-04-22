import { AlertActionType } from 'myRedux/constants';
const INIT_STATE = {
  status: false,
  contents: '',
  types: '',
};

export default function AlertReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case AlertActionType.OPEN_ALERT:
      return {
        ...state,
        status: true,
        contents: action.contents,
        types: action.types,
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
