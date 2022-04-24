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

    case CommunicationType.VIEW_INFO:
      return {};

    case CommunicationType.GET_INFO:
      return {
        email: action.email,
        name: action.name,
        phone: action.phone,
      };
    case CommunicationType.MODIFY_INFO:
      return {
        payload: action.payload,
      };

    case CommunicationType.WITHDRWAL_INFO:
      return { payload: { history: action.history } };

    // case CommunicationType.GET_TOKEN:
    //   return {
    //     email: action.email,
    //     token: action.token,
    //   };

    case CommunicationType.STORE_RESUME:
      return {
        info: action.info,
      };

    case CommunicationType.VIEW_RESUME:
      return {
        ...state,
      };

    case CommunicationType.GET_RESUME:
      return {
        ...state,
        datas: action.datas,
      };

    case CommunicationType.REMOVE_RESUME:
      return {
        r_id: action.id,
      };

    case CommunicationType.STORE_TEMP_RESUME:
      return {
        payload: action.payload,
      };

    case CommunicationType.VIEW_TEMP_RESUME:
      return {};

    case CommunicationType.GET_TEMP_RESUME:
      return {
        ...state,
        temps: action.temps,
      };
    default:
      return state;
  }
}
