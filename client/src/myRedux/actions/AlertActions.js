import { AlertActionType } from 'myRedux/constants';

export const openAlert = () => {
  return {
    type: AlertActionType.OPEN_ALERT,
  };
};

export const closeAlert = () => {
  return {
    type: AlertActionType.CLOSE_ALERT,
  };
};
