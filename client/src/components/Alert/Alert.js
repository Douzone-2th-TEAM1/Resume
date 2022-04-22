import React from 'react';
import { style } from './AlertStyle';
import { AiFillExclamationCircle } from 'react-icons/ai';

export const Alert = ({ status, contents }) => {
  return (
    <Layout status={status}>
      <AiFillExclamationCircle size={30} />
      <h5>{contents}</h5>
    </Layout>
  );
};

const { Layout } = style;
