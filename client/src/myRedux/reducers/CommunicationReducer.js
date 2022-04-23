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

    case CommunicationType.SIGN_IN:
      return {
        ...state,
        payload: action.payload,
      };

    case CommunicationType.MODIFY_INFO:
      return {
        ...state,
        payload: action.payload,
      };

    // case CommunicationType.GET_TOKEN:
    //   return {
    //     email: action.email,
    //     token: action.token,
    //   };

    case CommunicationType.STORE_RESUME:
      return {
        ...state,
        info: action.info,
      };
    default:
      return state;
  }
}
