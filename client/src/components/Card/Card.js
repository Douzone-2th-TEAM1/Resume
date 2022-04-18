import React, { useState } from 'react';
import { style } from './CardStyle';
import { FaAngleDoubleUp } from 'react-icons/fa';

export const Card = ({ onClickIcon, height }) => {
  return (
    <Container ht={height}>
      <IconLayout onClick={onClickIcon} ht={height}>
        <FaAngleDoubleUp size="50" color="#cdcdcd" />
      </IconLayout>

      <div style={{ height: '120vh', width: '100%', backgroundColor: 'blue' }}></div>
    </Container>
  );
};

const { Container, IconLayout } = style;
