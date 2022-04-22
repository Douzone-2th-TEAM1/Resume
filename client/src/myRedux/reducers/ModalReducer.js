import { ModalActionType } from 'myRedux/constants';
const INIT_STATE = {
  status: false,
};

export default function ModalReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ModalActionType.OPEN_MODAL:
      return {
        ...state,
        status: true,
      };

    case ModalActionType.CLOSE_MODAL:
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
}
