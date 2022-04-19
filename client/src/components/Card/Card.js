import React, { useEffect, useState } from 'react';
import { style } from './CardStyle';
import { FaAngleDoubleUp } from 'react-icons/fa';
import Dropbox from 'components/DropBox';
import TechStack from 'components/TechStack';

export const Card = ({ onClickIcon, height }) => {
  const [info, setInfo] = useState({
    department: '',
    techs: [],
    certifications: [],
    educations: [],
    projects: [],
    awards: [],
    careers: [],
    qnas: [],
    portfolio: '',
  });
  const [disabled, setDisabled] = useState(false);
  const [text, setText] = useState('');

  const onChangeInfo = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const onChangeTech = (values) => {
    const origin = info.techs;
    values && origin.push(values);
    setInfo({ ...info, techs: origin });
  };

  const checkLimit = () => {
    if (info.techs.length >= 5) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const onChangeDelTech = (value) => {
    let origin = info.techs;
    setInfo({ ...info, techs: origin.filter((e, i) => i !== Number(value)) });
  };

  const onChangeInput = (e) => {
    e.preventDefault();
    if (info.techs.length >= 5) {
      setDisabled(true);
    } else {
      setText(e.target.value);
    }
  };
  const resetText = () => {
    setText('');
  };

  useEffect(() => {
    checkLimit();
  }, [info]);
  return (
    <Container ht={height}>
      <IconLayout onClick={onClickIcon} ht={height}>
        <FaAngleDoubleUp size="50" color="#cdcdcd" />
      </IconLayout>

      <ItemWrapper>
        <ItemLayout>
          <ItemInnerLayout width={'70%'}>
            <Box ht={'40%'}>
              <ItemTitle>직무</ItemTitle>
              <Dropbox onChangeInfo={onChangeInfo} value={info.department} />
            </Box>
            <Box ht={'60%'}>
              <TechStack
                text={text}
                disable={disabled}
                resetText={resetText}
                techDatas={info.techs}
                onChangeTech={onChangeTech}
                onChangeDelTech={onChangeDelTech}
                onChangeInput={onChangeInput}
              />
            </Box>
          </ItemInnerLayout>
          <ItemInnerLayout width={'30%'}></ItemInnerLayout>
        </ItemLayout>
      </ItemWrapper>
    </Container>
  );
};

const { Container, IconLayout, ItemWrapper, ItemLayout, ItemInnerLayout, Box, ItemTitle } = style;
