import { AlertActionType } from 'myRedux/constants';

export const openAlert = (contents, types) => {
  return {
    type: AlertActionType.OPEN_ALERT,
    status: true,
    contents: contents,
    types: types,
  };
};

export const closeAlert = () => {
  return {
    type: AlertActionType.CLOSE_ALERT,
  };
};
