import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
`;
// -------------------------------------------
export const Headline = styled.div`
  height: 417px;
  width: 100%;
  background-color: #d6c000;
`;
// -------------------------------------------
export const Profile = styled.div`
  position: absolute;
  right: 100px;
  top: 200px;
  height: 352px;
  width: 874px;
`;
export const Profile_text = styled.div`
  position: absolute;
  height: 352px;
  width: 502px;
`;
export const Text_name = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: white;
  font-weight: bolder;
  font-size: 48px;
`;
export const Text_phone = styled.div`
  color: white;
  font-size: 36px;
`;
export const Text_emaiil = styled.div`
margin-top: 10px;
  color: white;
  font-size: 36px;
`;
export const Profile_img = styled.div`
  position: relative;
  float: right;
  height: 352px;
  width: 352px;
  border: 2px black solid;
  background-color: white;
`;
// -------------------------------------------
export const style = {
  Container,
  Headline,
  Profile,
  Profile_img,
  Profile_text,
  Text_emaiil,
  Text_name,
  Text_phone,
};
