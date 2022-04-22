import React from 'react';
import { style } from './AlertStyle';
import { AiFillExclamationCircle } from 'react-icons/ai';

export const Alert = ({ status }) => {
  return (
    <Layout status={status}>
      <AiFillExclamationCircle size={30} />
      <h5>이력서 저장이 완료되었습니다.</h5>
    </Layout>
  );
};

const { Layout } = style;
