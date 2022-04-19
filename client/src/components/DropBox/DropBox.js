import React from 'react';
import { style } from './DropBoxStyle';
import { AiFillCaretDown } from 'react-icons/ai';

export const DropBox = () => {
  return (
    <>
      <Layout>
        <AiFillCaretDown size="25" />
        <DropLayout />
      </Layout>
    </>
  );
};

const { Wrapper, Layout, DropLayout } = style;
