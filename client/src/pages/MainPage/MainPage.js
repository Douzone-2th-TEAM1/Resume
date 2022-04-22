import React, { useEffect, useState } from 'react';
import { style } from './MainPageStyle';
import Card from 'components/Card';
import MyPage from 'pages/MyPage';
import TemplatePage from 'pages/TemplatePage';

export const MainPage = () => {
  const [height, setHeight] = useState('400px');
  const [openMyPage, setOpenMyPage] = useState(false);
  const [openTemplatePage, setOpenTemplatPage] = useState(false);

  const onClickIcon = () => {
    setHeight('880px');
  };
  const onClickCancel = () => {
    setHeight('400px');
  };
  const onMouseOverMypage = (e) => {
    if (window.innerWidth - e.clientX <= 364) {
      setOpenMyPage(true);
    } else {
      setOpenMyPage(false);
    }
  };
  const onClickTemplateChoice = () => {
    setOpenTemplatPage(true);
  };

  const onClickTemplateClose = () => {
    setOpenTemplatPage(false);
  };

  // useEffect(() => {
  //   if (!openTemplatePage) onClickCancel();
  // }, [openTemplatePage]);

  return (
    <div onMouseMove={onMouseOverMypage}>
      <Container openMyPage={openMyPage}>
        <MainTitle ht={height}>
          The alternative to good design is always bad design.
          <br />
          There is no such thing as no design.
        </MainTitle>

        <Card
          onClickIcon={onClickIcon}
          onClickCancel={onClickCancel}
          height={height}
          onClickTemplateChoice={onClickTemplateChoice}
        />
        <TopTriangle />
        <BttomTriangle />
      </Container>

      {height === '400px' && <MyPage openMyPage={openMyPage} />}
      {openTemplatePage && (
        <TemplatePage
          openTemplatePage={openTemplatePage}
          onClickTemplateClose={onClickTemplateClose}
          onClickCancel={onClickCancel}
        />
      )}
    </div>
  );
};

const { Container, TopTriangle, BttomTriangle, MainTitle } = style;
