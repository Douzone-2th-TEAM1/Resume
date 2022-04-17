import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const TopTriangle = styled.div`
  position: absolute;
  top: -90px;
  width: 0px;
  height: 0px;
  border-bottom: 360px solid #334257;
  border-left: 0px solid transparent;
  border-right: 180px solid transparent;
  transform: rotate(90deg);
`;

export const BttomTriangle = styled.div`
  position: absolute;
  right: 0;
  width: 0px;
  height: 0px;
  border-bottom: 100vh solid #334257;
  border-left: 100vh solid transparent;
  border-right: 0px solid transparent;
`;

export const style = {
  Container,
  TopTriangle,
  BttomTriangle,
};
