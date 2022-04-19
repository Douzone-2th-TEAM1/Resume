import React, { useEffect, useState } from 'react';
import { style } from './DropBoxStyle';
import { AiFillCaretDown } from 'react-icons/ai';
import { DEPARTMENT_LIST } from 'utils/constants/departmentList';

export const DropBox = ({ onChangeInfo, value }) => {
  const [open, setOpen] = useState(false);
  const onClickDropBox = () => {
    setOpen(!open);
  };

  return (
    <Layout onClick={onClickDropBox}>
      <input placeholder="선택" readOnly value={value} />
      <IconLayout open={open}>
        <AiFillCaretDown size="25" />
      </IconLayout>
      <DropLayout open={open}>
        {DEPARTMENT_LIST.map((item, index) => {
          return (
            <Item
              id="department"
              readOnly
              key={index}
              open={open}
              value={item.value}
              onClick={onChangeInfo}
            />
          );
        })}
      </DropLayout>
    </Layout>
  );
};

const { Wrapper, Layout, DropLayout, Item, IconLayout } = style;
