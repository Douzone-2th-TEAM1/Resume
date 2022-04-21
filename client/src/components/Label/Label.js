import React from 'react';
import { style } from './LabelStyle';
import { BsXCircle } from 'react-icons/bs';
export const Label = ({ item, bgColor, id, text, onChangeDelInfo }) => {
  const onClickDel = (e) => {
    onChangeDelInfo(e.target.value, e.target.id);
  };

  return (
    <Layout bgColor={bgColor}>
      <TextLayout>{text}</TextLayout>
      <IconLayout id={id} value={item} onClick={onClickDel}>
        <BsXCircle size={20} pointerEvents={'none'} color={'#ffff'} />
      </IconLayout>
    </Layout>
  );
};

const { Layout, TextLayout, IconLayout } = style;
