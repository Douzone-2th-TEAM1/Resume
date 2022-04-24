import React, { useEffect, useRef, useState } from 'react';
import { style } from './MainPageStyle';
import Card from 'components/Card';
import MyPage from 'pages/MyPage';
import TemplatePage from 'pages/TemplatePage';
import { useDispatch, useSelector } from 'react-redux';
import { viewResume, viewTempResume } from 'myRedux/actions/CommuicationAction';

export const MainPage = () => {
  const dispatch = useDispatch();
  const resumeInfo = useSelector((state) => {
    return state.CommunicationReducer;
  });
  const [height, setHeight] = useState('400px');
  const [openMyPage, setOpenMyPage] = useState(false);
  const [openTemplatePage, setOpenTemplatPage] = useState(false);
  const cardRef = useRef();
  const onClickIcon = () => {
    setHeight('880px');
  };
  const onClickCancel = () => {
    setHeight('400px');
  };
  const onMouseOverMypage = (e) => {
    if (window.innerWidth - e.clientX <= 360) {
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

  useEffect(() => {
    console.log(resumeInfo);
  }, [resumeInfo]);

  useEffect(() => {
    dispatch(viewResume());
    dispatch(viewTempResume());
  }, []);
  // useEffect(() => {
  //   if (!openTemplatePage) onClickCancel();
  // }, [openTemplatePage]);

  return (
    <div onMouseMove={onMouseOverMypage}>
      <Container openMyPage={openMyPage}>
        <MainTitle ht={height}>지금 바로 나만의 이력서를 작성해보세요!</MainTitle>

        <Card
          cardRef={cardRef}
          onClickIcon={onClickIcon}
          onClickCancel={onClickCancel}
          height={height}
          onClickTemplateChoice={onClickTemplateChoice}
        />
        <TopTriangle />
        <BttomTriangle />
      </Container>

      {height === '400px' && <MyPage openMyPage={openMyPage} resumeInfo={resumeInfo} />}
      {openTemplatePage && (
        <TemplatePage
          cardRef={cardRef}
          openTemplatePage={openTemplatePage}
          onClickTemplateClose={onClickTemplateClose}
          onClickCancel={onClickCancel}
        />
      )}
    </div>
  );
};

const { Container, TopTriangle, BttomTriangle, MainTitle } = style;
