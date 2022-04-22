import React, { useEffect, useState } from 'react';
import { style } from './TemplatePageStyle';
import { TEMPLATE_LIST } from 'utils/constants/templateList';

import Sample1 from 'assets/sample1.png';
import Sample2 from 'assets/sample2.png';
import PreviewPage from 'pages/PreviewPage';

export const TemplatePage = ({ openTemplatePage, onClickTemplateClose, onClickCancel }) => {
  const [previewOpen, setPreviewOpen] = useState({
    status: false,
    choose: '',
  });

  const onClickPreview = (e) => {
    setPreviewOpen({
      status: true,
      choose: e.target.id,
    });
  };

  const onClickClose = () => {
    setPreviewOpen({
      status: false,
      choose: '',
    });
  };

  // useEffect(() => {
  //   if (!previewOpen.status) {
  //     onClickTemplateClose();
  //   }
  // }, [previewOpen]);

  return (
    <Wrapper flag={openTemplatePage}>
      {previewOpen.status && <PreviewPage target={previewOpen.choose} close={onClickClose} />}
      <Container flag={openTemplatePage}>
        <TopLayout>
          <Rectangle />
        </TopLayout>

        <PageTitle flag={openTemplatePage}>TEMPLATE</PageTitle>
        <CntntsLayout>
          {TEMPLATE_LIST &&
            TEMPLATE_LIST.map((item, index) => {
              return (
                <TemplateLayout key={index} flag={openTemplatePage}>
                  <TemplateInnerLayout>
                    <img src={item.img} style={{ width: '100%' }} />
                  </TemplateInnerLayout>
                  <TemplateInnerLayout>
                    <h1>{item.title}</h1>
                    <h4>{item.detail}</h4>
                    <BtnLayout>
                      <button id={index} onClick={onClickPreview}>
                        선택
                      </button>
                    </BtnLayout>
                  </TemplateInnerLayout>
                </TemplateLayout>
              );
            })}
        </CntntsLayout>
      </Container>
    </Wrapper>
  );
};
const {
  Wrapper,
  Container,
  TopLayout,
  PageTitle,
  CntntsLayout,
  Rectangle,
  MyInfoLayout,
  MyInfoItem,
  SignOutBtn,
  TemplateLayout,
  TemplateInnerLayout,
  BtnLayout,
} = style;
