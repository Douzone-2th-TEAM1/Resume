import { modifyInfo, viewInfo, withdrawlInfo } from 'myRedux/actions/CommuicationAction';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { style } from './ModifyPageStyle';
import { regexPwd } from 'utils/regex';
import { regexTel } from 'utils/regex';

export const ModifyPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const getUserInfo = useSelector((state) => state.CommunicationReducer);

  const [modify, setModify] = useState({
    pwd: '',
    pwdc: '',
    nick: '',
    tel: '',
  });
  useEffect(() => {
    dispatch(viewInfo());
  }, []);

  useEffect(() => {
    console.log(getUserInfo);
    const { email, name, phone } = getUserInfo;
    Object.keys(getUserInfo).length > 0 && setModify({ ...modify, nick: name, tel: phone });
  }, [getUserInfo]);

  const [pwdCheck, setPwdCheck] = useState(false);
  const [pwdcCheck, setPwdcCheck] = useState(false);
  const [nickCheck, setNickCheck] = useState(false);
  const [telCheck, setTelCheck] = useState(false);

  const handleModify = (e) => {
    setModify({ ...modify, [e.target.id]: e.target.value });
  };

  const checkPwd = (e) => {
    setPwdCheck(regexPwd.test(modify.pwd));
  };
  const checkPwdc = (e) => {
    if (modify.pwd === modify.pwdc) {
      setPwdcCheck(true);
    } else {
      setPwdcCheck(false);
    }
    if (modify.nick.length >= 1) setNickCheck(true);
    if (regexTel.test(modify.tel)) setTelCheck(true);
  };
  const checkNick = (e) => {
    if (modify.nick.length >= 1) {
      setNickCheck(true);
    } else {
      setNickCheck(false);
    }
  };
  const checkTel = (e) => {
    setTelCheck(regexTel.test(modify.tel));
  };
  const onClickModify = () => {
    dispatch(modifyInfo(modify.pwd, modify.nick, modify.tel, history));
  };
  const onClickCancel = () => {
    history.push('/main');
  };

  const onClickWithdrawal = () => {
    history.push('/resign');
  };

  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (pwdCheck && pwdcCheck && nickCheck && telCheck) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [pwdCheck, pwdcCheck, nickCheck, telCheck]);

  return (
    <Container>
      <Background>
        <Triangle1 />
        <Triangle2 />
      </Background>
      <ModifyForm>
        <InnerLayout>
          <T1>
            <h1>회원정보 조회/수정</h1>
          </T1>
          <ModifyForm2>
            <InnerLayout2>
              <InputForm>
                <InputInnerLayout>
                  <h2>비밀번호</h2>
                  <Input1
                    type="password"
                    id="pwd"
                    placeholder="영문, 숫자를 조합한 최소 8글자, 최대 20글자"
                    value={modify.pwd || ''}
                    onChange={handleModify} // 요건 변경된 값을 대입하는 함수
                    onKeyUp={checkPwd} // 요건 변경된 값이 올바른지 확인하는 함수
                  />
                  {!pwdCheck && modify.pwd.length >= 1 && (
                    <Error1> 비밀번호 양식을 확인해주세요. </Error1>
                  )}
                  {pwdCheck && <Correct1>사용할 수 있는 비밀번호에요. </Correct1>}
                </InputInnerLayout>
                <InputInnerLayout>
                  <h2>비밀번호 확인</h2>
                  <Input1
                    type="password"
                    id="pwdc"
                    value={modify.pwdc || ''}
                    onChange={handleModify}
                    onKeyUp={checkPwdc}
                  />
                  {!pwdcCheck && modify.pwdc.length >= 1 && (
                    <Error1> 비밀번호가 일치하지 않습니다. </Error1>
                  )}
                </InputInnerLayout>
                <InputInnerLayout>
                  <h2>이름</h2>
                  <Input1
                    id="nick"
                    value={modify.nick || ''}
                    onChange={handleModify}
                    onKeyUp={checkNick}
                  />
                </InputInnerLayout>
                <InputInnerLayout>
                  <h2>연락처</h2>
                  <Input1
                    id="tel"
                    value={modify.tel || ''}
                    onChange={handleModify}
                    onKeyUp={checkTel}
                  />
                </InputInnerLayout>
              </InputForm>
            </InnerLayout2>
            <Btn1 disabled={isDisabled} onClick={onClickModify}>
              저 장
            </Btn1>
            <br />
            <Btn2 onClick={onClickCancel}>취 소</Btn2>
          </ModifyForm2>
          <BtnWrapper>
            <Btn3 onClick={onClickWithdrawal}>회원탈퇴</Btn3>
          </BtnWrapper>
        </InnerLayout>
      </ModifyForm>
    </Container>
  );
};

// -----------------------------------------------------------
const {
  Container,
  Background,
  Triangle1,
  Triangle2,
  ModifyForm,
  InnerLayout,
  T1,
  ModifyForm2,
  InnerLayout2,
  Input1,
  InputInnerLayout,
  Btn1,
  Btn2,
  InputForm,
  BtnWrapper,
  Btn3,
  Error1,
  Correct1,
} = style;
