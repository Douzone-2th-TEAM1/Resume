import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
  width:100%;
  height: 100%;
  position: fixed;
`;
// -------------------------------------------

// -------------------------------------------
export const style = {
  Container,
};
