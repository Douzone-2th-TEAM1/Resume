import React from 'react';
import { style } from './MainPageStyle';

export const MainPage = () => {
  return (
    <Container>
      <TopTriangle />
      <BttomTriangle />
    </Container>
  );
};

const { Container, TopTriangle, BttomTriangle } = style;
