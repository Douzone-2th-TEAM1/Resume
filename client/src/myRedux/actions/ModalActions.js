import { ModalActionType } from 'myRedux/constants';

export const openModal = () => {
  return {
    type: ModalActionType.OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: ModalActionType.CLOSE_MODAL,
  };
};
