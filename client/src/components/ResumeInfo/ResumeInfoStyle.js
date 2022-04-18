import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0%{
    visibility:hidden;
    opacity:0
    width:0%;
  }
  40%{
    visibility:hidden;
    opacity:50%;
    width:100%;
  }
  100%{
    opacity:100%;
    width:100%;
  }
`;

const Layout = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', '', 'column')};
  height: auto;
  min-height: 200px;
  animation: ${fadeIn} 1s;
  animation-fill-mode: forwards;
`;
const MenuTitle = styled.h4`
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
`;

export const style = { Layout, MenuTitle };
