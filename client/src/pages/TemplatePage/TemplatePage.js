import React, { useEffect } from 'react';
import { style } from './TemplatePageStyle';
import Sample1 from 'assets/sample1.png';
import Sample2 from 'assets/sample2.png';

export const TemplatePage = ({ openTemplatePage }) => {
  // useEffect(() => {
  //   axios.post('192.168.2.26:8080/resumes/download', (response) => {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <Wrapper flag={openTemplatePage}>
      <Container flag={openTemplatePage}>
        <TopLayout>
          <Rectangle />
        </TopLayout>

        <PageTitle flag={openTemplatePage}>TEMPLATE</PageTitle>
        <CntntsLayout>
          <TemplateLayout flag={openTemplatePage}>
            <TemplateInnerLayout>
              <img src={Sample1} style={{ width: '100%' }} />
            </TemplateInnerLayout>
            <TemplateInnerLayout>
              <h1>모던한 템플릿</h1>
              <h4>
                깔끔한 레이아웃으로 차분한 분위기의 이력서 템플릿입니다. <br />
                가장 기본적인 이력서를 원한다면 적용해보세요!
              </h4>
              <BtnLayout>
                <button>선택</button>
              </BtnLayout>
            </TemplateInnerLayout>
          </TemplateLayout>

          <TemplateLayout flag={openTemplatePage}>
            <TemplateInnerLayout>
              <img src={Sample2} style={{ width: '100%' }} />
            </TemplateInnerLayout>
            <TemplateInnerLayout>
              <h1>따뜻한 템플릿</h1>
              <h4>
                깔끔한 레이아웃으로 따뜻한 분위기의 이력서 템플릿입니다. <br />
                따뜻한 분위기를 원한다면 적용해보세요!
              </h4>
              <BtnLayout>
                <button>선택</button>
              </BtnLayout>
            </TemplateInnerLayout>
          </TemplateLayout>
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
