import React, { useState } from 'react';
import { style } from './CardStyle';
import { FaAngleDoubleUp } from 'react-icons/fa';

export const Card = ({ onClickIcon, height }) => {
  return (
    <Container ht={height}>
      <IconLayout ht={height}>
        <FaAngleDoubleUp onClick={onClickIcon} size="50" color="#cdcdcd" />
      </IconLayout>
    </Container>
  );
};

const { Container, IconLayout } = style;
