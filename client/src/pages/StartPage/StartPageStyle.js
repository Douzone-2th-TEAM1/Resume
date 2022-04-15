import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
`;

export const Background = styled.div`
  width: 100%;
  height: 500px;
  background-color: #334257;
  @media ${({ theme }) => theme.device.tablet} {
    height: 100px;
  }
`;

export const style = {
  Container,
  Background,
};
