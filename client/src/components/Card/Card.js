import React, { useEffect, useState } from 'react';
import { style } from './CardStyle';
import { FaAngleDoubleUp } from 'react-icons/fa';
import Dropbox from 'components/DropBox';
import TechStack from 'components/TechStack';
import Certification from 'components/Certification';
import checkLimit from 'utils/checkLimit';
import Form from 'components/Form';

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
  const [img, setImg] = useState('');
  const [disableStatus, setDisableStatus] = useState({
    techs: false,
    certifications: false,
    educations: false,
  });

  const [inputText, setInputText] = useState({
    techs: '',
    portfolio: '',
  });

  const [certiText, setCertiText] = useState({
    certiName: '',
    certiScore: '',
    certiDate: '',
  });

  const onChangeCertiInput = (e) => {
    e.preventDefault();
    checkStatus('certifications');
    !disableStatus['certifications'] &&
      setCertiText({ ...certiText, [e.target.id]: e.target.value });
  };

  const onInsertCerti = () => {
    const [name, score, date] = [certiText.certiName, certiText.certiScore, certiText.certiDate];
    const origin = info.certifications;
    if (name && score && date) {
      origin.push({ certiName: name, certiScore: score, certiDate: date });
      setInfo({ ...info, certifications: origin });
      return true;
    }
    return false;
  };

  const [eduText, setEduText] = useState({
    eduName: '',
    eduStartDate: '',
    eduEndDate: '',
    eduCntns: '',
  });

  const onChangeEduInput = (e) => {
    e.preventDefault();
    checkStatus('educations', 3);
    // debugger;
    !disableStatus['educations'] && setEduText({ ...eduText, [e.target.id]: e.target.value });
  };

  const onInsertEdu = () => {
    const [name, Sdate, Edate, cntns] = [
      eduText.eduName,
      eduText.eduStartDate,
      eduText.eduEndDate,
      eduText.eduCntns,
    ];
    const origin = info.educations;
    if (name && Sdate && Edate && cntns) {
      origin.push({ eduName: name, eduStartDate: Sdate, eduEndDate: Edate, eduCntns: cntns });
      setInfo({ ...info, educations: origin });
      return true;
    }
    return false;
  };

  const onChangeInfo = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };

  const onInsertTech = (values) => {
    const origin = info.techs;
    values && origin.push(values);
    setInfo({ ...info, techs: origin });
  };

  const onChangeDelInfo = (target, value) => {
    let origin = info[target];
    setInfo({ ...info, [target]: origin.filter((e, i) => i !== Number(value)) });
  };

  const onChangeInput = (e) => {
    e.preventDefault();
    checkStatus(e.target.id);
    !disableStatus[e.target.id] && setInputText({ ...inputText, [e.target.id]: e.target.value });
  };

  const resetText = (id) => {
    setInputText({ ...inputText, [id]: '' });
  };

  const checkStatus = (id, count = 5) => {
    if (checkLimit(info[id], count)) {
      setDisableStatus({ ...disableStatus, [id]: true });
    } else {
      setDisableStatus({ ...disableStatus, [id]: false });
    }
  };

  const resetCerti = () => {
    setCertiText({ certiName: '', certiScore: '', certiDate: '' });
  };

  const resetEdu = () => {
    setEduText({
      eduName: '',
      eduStartDate: '',
      eduEndDate: '',
      eduCntns: '',
    });
  };

  const onChangeImg = (e) => {
    const file = e.target.files;

    setImg(URL.createObjectURL(file[0]));
  };

  useEffect(() => {
    console.log(info);
    if (info?.techs) {
      checkStatus('techs');
    } else if (info?.certifications) {
      checkStatus('certifications');
    } else if (info?.educations) {
      checkStatus('educations', 3);
    }
  }, [info]);

  // useEffect(() => {
  //   console.log(img);
  // }, [img]);

  return (
    <Container ht={height}>
      <IconLayout onClick={onClickIcon} ht={height}>
        <FaAngleDoubleUp size="50" color="#cdcdcd" />
      </IconLayout>

      <ItemWrapper>
        <ItemLayout minHt={'500px'}>
          <ItemInnerLayout width={'70%'}>
            <Box ht={'40%'}>
              <ItemTitle>직무</ItemTitle>
              <Dropbox onChangeInfo={onChangeInfo} value={info.department} />
            </Box>
            <Box ht={'60%'}>
              <TechStack
                id="techs"
                text={inputText.techs}
                disable={disableStatus.techs}
                resetText={resetText}
                techDatas={info.techs}
                onInsertTech={onInsertTech}
                onChangeDelInfo={onChangeDelInfo}
                onChangeInput={onChangeInput}
              />
            </Box>
          </ItemInnerLayout>
          <ItemInnerLayout width={'30%'}>
            <ImgLayout htmlFor="img" onChange={onChangeImg}>
              {img && <img src={img} style={{ width: '100%', height: '100%' }} />}
              {!img && <h6>사진 (3x4)</h6>}
              <ImgBtn type="file" id="img" placeholder="사진" accept=".jpg,.jpeg,.png" />
            </ImgLayout>
          </ItemInnerLayout>
        </ItemLayout>

        <ItemLayout minHt={'400px'}>
          <Certification
            certiDatas={info.certifications}
            disable={disableStatus.certifications}
            certiName={certiText.certiName}
            certiScore={certiText.certiScore}
            certiDate={certiText.certiDate}
            onChangeCertiInput={onChangeCertiInput}
            onInsertCerti={onInsertCerti}
            resetCerti={resetCerti}
            onChangeDelInfo={onChangeDelInfo}
          />
        </ItemLayout>

        <ItemLayout>
          <Form
            item={'교육'}
            eduDatas={info.educations}
            disable={disableStatus.educations}
            onChangeEduInput={onChangeEduInput}
            eduText={eduText}
            onInsertEdu={onInsertEdu}
            resetEdu={resetEdu}
          ></Form>
        </ItemLayout>
      </ItemWrapper>
    </Container>
  );
};

const {
  Container,
  IconLayout,
  ItemWrapper,
  ItemLayout,
  ItemInnerLayout,
  Box,
  ItemTitle,
  ImgLayout,
  ImgBtn,
} = style;
