import { ResumeActionType } from 'myRedux/constants';

export const storeInfo = (info) => {
  return {
    type: ResumeActionType.ENROLL_INFO,
    info: info,
  };
};

// export const storeResume = (info) => {
//   return {
//     type: ResumeActionType.STORE_RESUME,
//     info: info,
//   };
// };

export const cancel = () => {
  return {
    type: ResumeActionType.CANCEL_INFO,
  };
};
