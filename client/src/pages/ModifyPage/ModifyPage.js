import { modifyInfo, viewInfo, withdrawlInfo } from 'myRedux/actions/CommuicationAction';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { style } from './ModifyPageStyle';

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
    var regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    setPwdCheck(regExp.test(modify.pwd));
  };
  const checkPwdc = (e) => {
    if (modify.pwd === modify.pwdc) {
      setPwdcCheck(true);
    } else {
      setPwdcCheck(false);
    }
  };
  const checkNick = (e) => {
    if (modify.nick.length >= 1) {
      setNickCheck(true);
    } else {
      setNickCheck(false);
    }
  };
  const checkTel = (e) => {
    var regExp = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
    setTelCheck(regExp.test(modify.tel));
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
            <h1>회원정보 수정</h1>
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
                    value={modify.pwd}
                    onChange={handleModify} // 요건 변경된 값을 대입하는 함수
                    onKeyUp={checkPwd} // 요건 변경된 값이 올바른지 확인하는 함수
                  />
                </InputInnerLayout>
                <InputInnerLayout>
                  <h2>비밀번호 확인</h2>
                  <Input1
                    type="password"
                    id="pwdc"
                    value={modify.pwdc}
                    onChange={handleModify}
                    onKeyUp={checkPwdc}
                  />
                </InputInnerLayout>
                <InputInnerLayout>
                  <h2>이름</h2>
                  <Input1
                    id="nick"
                    value={modify.nick}
                    onChange={handleModify}
                    onKeyUp={checkNick}
                  />
                </InputInnerLayout>
                <InputInnerLayout>
                  <h2>연락처</h2>
                  <Input1 id="tel" value={modify.tel} onChange={handleModify} onKeyUp={checkTel} />
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
  T2,
  Input1,
  InputInnerLayout,
  Btn1,
  Btn2,
  InputForm,
  BtnWrapper,
  Btn3,
} = style;
