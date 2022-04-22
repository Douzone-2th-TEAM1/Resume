import { ResumeActionType } from 'myRedux/constants';

export const storeInfo = (info) => {
  return {
    type: ResumeActionType.ENROLL_INFO,
    info: info,
  };
};

export const cancel = () => {
  return {
    type: ResumeActionType.CANCEL_INFO,
  };
};
