import React, { useState } from 'react';
import { style } from './MainPageStyle';
import Card from 'components/Card';

export const MainPage = () => {
  const [height, setHeight] = useState('400px');
  const onClickIcon = () => {
    setHeight('1000px');
  };
  return (
    <Container>
      <MainTitle ht={height}>
        The alternative to good design is always bad design.
        <br />
        There is no such thing as no design.
      </MainTitle>

      <Card onClickIcon={onClickIcon} height={height} />
      <TopTriangle />
      <BttomTriangle />
    </Container>
  );
};

const { Container, TopTriangle, BttomTriangle, MainTitle } = style;
