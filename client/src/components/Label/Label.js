import React from 'react';
import { style } from './LabelStyle';
import { BsXCircle } from 'react-icons/bs';
export const Label = ({ id, text, onChangeDelTech }) => {
  const onClickDel = (e) => {
    onChangeDelTech(e.target.id);
  };

  return (
    <Layout>
      <TextLayout>{text}</TextLayout>
      <IconLayout id={id} onClick={onClickDel}>
        <BsXCircle size={20} id={id} onClick={onClickDel} />
      </IconLayout>
    </Layout>
  );
};

const { Layout, TextLayout, IconLayout } = style;
