import React from 'react';
import Label from 'components/Label';
import { style } from './TechStackStyle';

export const TechStack = ({
  text,
  disable,
  resetText,
  techDatas,
  onInsertTech,
  onChangeDelInfo,
  onChangeInput,
}) => {
  const onClickEnter = (e) => {
    if (e.key === 'Enter') {
      text && onInsertTech(text);
      resetText(e.target.id);
    }
  };

  return (
    <Layout>
      <InnerLayout>
        <Title>기술스택</Title>
        <InputLayout
          id="techs"
          value={text}
          placeholder="최대 5개까지 입력 가능"
          onKeyPress={onClickEnter}
          onChange={onChangeInput}
          disabled={disable}
        />
      </InnerLayout>
      <InnerLayout2>
        {techDatas &&
          techDatas.map((item, index) => {
            return (
              <Label
                item={'techs'}
                bgColor={'#92a9bd'}
                key={index}
                id={index}
                text={item}
                onChangeDelInfo={onChangeDelInfo}
              />
            );
          })}
      </InnerLayout2>
    </Layout>
  );
};

const { Layout, InnerLayout, Title, InputLayout, InnerLayout2 } = style;
