import React, { useEffect, useState } from 'react';
import { style } from './MainPageStyle';
import Card from 'components/Card';
import MyPage from 'pages/MyPage';

export const MainPage = () => {
  const [height, setHeight] = useState('400px');
  const [openMyPage, setOpenMyPage] = useState(false);
  const onClickIcon = () => {
    setHeight('880px');
  };

  const onMouseOverMypage = (e) => {
    if (window.innerWidth - e.clientX <= 364) {
      setOpenMyPage(true);
    } else {
      setOpenMyPage(false);
    }
  };

  return (
    <div onMouseMove={onMouseOverMypage}>
      <Container openMyPage={openMyPage}>
        <MainTitle ht={height}>
          The alternative to good design is always bad design.
          <br />
          There is no such thing as no design.
        </MainTitle>

        <Card onClickIcon={onClickIcon} height={height} />
        <TopTriangle />
        <BttomTriangle />
      </Container>

      {height === '400px' && <MyPage openMyPage={openMyPage} />}
    </div>
  );
};

const { Container, TopTriangle, BttomTriangle, MainTitle } = style;
