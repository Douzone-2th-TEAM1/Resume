import React, { useState } from 'react';
import { style } from './CardStyle';
import { FaAngleDoubleUp } from 'react-icons/fa';
import Dropbox from 'components/DropBox';

export const Card = ({ onClickIcon, height }) => {
  return (
    <Container ht={height}>
      <IconLayout onClick={onClickIcon} ht={height}>
        <FaAngleDoubleUp size="50" color="#cdcdcd" />
      </IconLayout>

      <ItemWrapper>
        <ItemLayout>
          <ItemInnerLayout width={'60%'}>
            <ItemTitle>직무</ItemTitle>
            <Dropbox />
            {/* <ItemTitle>기술스택</ItemTitle> */}
          </ItemInnerLayout>
          <ItemInnerLayout width={'40%'}></ItemInnerLayout>
        </ItemLayout>
      </ItemWrapper>
    </Container>
  );
};

const { Container, IconLayout, ItemWrapper, ItemLayout, ItemInnerLayout, Layout, ItemTitle } =
  style;
