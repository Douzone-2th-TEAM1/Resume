import { CommunicationType } from 'myRedux/constants/action-type';
const INIT_STATE = {};
export default function CommunicationReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CommunicationType.SIGN_UP:
      return {
        ...state,
        email: action.email,
        pwd: action.pwd,
        name: action.name,
        phone: action.phone,
      };

    default:
      return state;
  }
}
