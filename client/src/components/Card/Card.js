import React, { useEffect, useState } from 'react';
import { style } from './CardStyle';
import { FaAngleDoubleUp } from 'react-icons/fa';
import Dropbox from 'components/DropBox';
import TechStack from 'components/TechStack';
import Certification from 'components/Certification';
import checkLimit from 'utils/checkLimit';
import Form from 'components/Form';
import QnaForm from 'components/QnaForm';
import Portfolio from 'components/Portfolio';

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
    awards: false,
    projects: false,
    careers: false,
    qnas: false,
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

  const [awrdsText, setAwrdsText] = useState({
    awrdName: '',
    awrdDate: '',
    awrdCntns: '',
  });

  const onChangeAwrdsInput = (e) => {
    e.preventDefault();
    checkStatus('awards', 3);
    // debugger;
    !disableStatus['awards'] && setAwrdsText({ ...awrdsText, [e.target.id]: e.target.value });
  };

  const onInsertAwrds = () => {
    const [name, date, cntns] = [awrdsText.awrdName, awrdsText.awrdDate, awrdsText.awrdCntns];
    const origin = info.awards;
    if (name && date && cntns) {
      origin.push({ awrdName: name, awrdDate: date, awrdCntns: cntns });
      setInfo({ ...info, awards: origin });
      return true;
    }
    return false;
  };

  const [prjsText, setPrjsText] = useState({
    prjName: '',
    prjStartDate: '',
    prjEndDate: '',
    prjCntns: '',
  });

  const onChangePrjsInput = (e) => {
    e.preventDefault();
    checkStatus('projects', 3);
    // debugger;
    !disableStatus['projects'] && setPrjsText({ ...prjsText, [e.target.id]: e.target.value });
  };
  const onInsertPrjs = () => {
    const [name, sdate, edate, cntns] = [
      prjsText.prjName,
      prjsText.prjStartDate,
      prjsText.prjEndDate,
      prjsText.prjCntns,
    ];
    const origin = info.projects;
    if (name && sdate && edate && cntns) {
      origin.push({ prjName: name, prjStartDate: sdate, prjEndDate: edate, prjCntns: cntns });
      setInfo({ ...info, projects: origin });
      return true;
    }
    return false;
  };

  const [carsText, setCarsText] = useState({
    cmpnyName: '',
    workStartDate: '',
    workEndDate: '',
    workCntns: '',
  });

  const onChangeCarsInput = (e) => {
    e.preventDefault();
    checkStatus('careers', 3);
    // debugger;
    !disableStatus['careers'] && setCarsText({ ...carsText, [e.target.id]: e.target.value });
  };

  const onInsertCars = () => {
    const [name, sdate, edate, cntns] = [
      carsText.cmpnyName,
      carsText.workStartDate,
      carsText.workEndDate,
      carsText.workCntns,
    ];
    const origin = info.careers;
    if (name && sdate && edate && cntns) {
      origin.push({ cmpnyName: name, workStartDate: sdate, workEndDate: edate, workCntns: cntns });
      setInfo({ ...info, careers: origin });
      return true;
    }
    return false;
  };

  const [qnaText, setQnaText] = useState({
    quest: '',
    answer: '',
  });

  const onChangeQnaInput = (e) => {
    e.preventDefault();
    checkStatus('qnas', 2);
    // debugger;
    !disableStatus['qnas'] && setQnaText({ ...qnaText, [e.target.id]: e.target.value });
  };

  const onInsertQnas = () => {
    const [quest, answer] = [qnaText.quest, qnaText.answer];
    const origin = info.qnas;
    if (quest && answer) {
      origin.push({ quest: quest, answer: answer });
      setInfo({ ...info, qnas: origin });
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
  const resetAwrds = () => {
    setAwrdsText({
      awrdName: '',
      awrdDate: '',
      awrdCntns: '',
    });
  };
  const resetPrjs = () => {
    setPrjsText({
      prjName: '',
      prjStartDate: '',
      prjEndDate: '',
      prjCntns: '',
    });
  };

  const resetCars = () => {
    setCarsText({
      cmpnyName: '',
      workStartDate: '',
      workEndDate: '',
      workCntns: '',
    });
  };

  const resetQnas = () => {
    setQnaText({
      quest: '',
      answer: '',
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
    } else if (info?.projects) {
      checkStatus('projects', 3);
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
            datas={info.educations}
            disable={disableStatus.educations}
            onChangeInput={onChangeEduInput}
            text={eduText}
            onInsertDatas={onInsertEdu}
            resetText={resetEdu}
          ></Form>
        </ItemLayout>

        <ItemLayout>
          <Form
            item={'수상'}
            datas={info.awards}
            disable={disableStatus.awards}
            onChangeInput={onChangeAwrdsInput}
            text={awrdsText}
            onInsertDatas={onInsertAwrds}
            resetText={resetAwrds}
          ></Form>
        </ItemLayout>

        <ItemLayout>
          <Form
            item={'프로젝트'}
            datas={info.projects}
            disable={disableStatus.projects}
            onChangeInput={onChangePrjsInput}
            text={prjsText}
            onInsertDatas={onInsertPrjs}
            resetText={resetPrjs}
          ></Form>
        </ItemLayout>

        <ItemLayout>
          <Form
            item={'경력'}
            datas={info.careers}
            disable={disableStatus.careers}
            onChangeInput={onChangeCarsInput}
            text={carsText}
            onInsertDatas={onInsertCars}
            resetText={resetCars}
          ></Form>
        </ItemLayout>

        <ItemLayout>
          <QnaForm
            datas={info.qnas}
            disable={disableStatus.qnas}
            onChangeInput={onChangeQnaInput}
            text={qnaText}
            onInsertDatas={onInsertQnas}
            resetText={resetQnas}
          />
        </ItemLayout>

        <ItemLayout>
          <Portfolio />
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
