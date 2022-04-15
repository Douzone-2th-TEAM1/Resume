import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
`;

export const Background = styled.div`
  border-top: 1080px solid #334257;
  border-right: 400px solid transparent;
  width: 95%;
  left: -30%;

  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 0;
`;

export const style = {
  Container,
  Background,
};
