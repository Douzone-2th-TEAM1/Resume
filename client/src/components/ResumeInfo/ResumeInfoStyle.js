import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeInTypo = (flag) => {
  if (flag) {
    return keyframes`
    0%{
    visibility:hidden;
    opacity:0%;
    width:100%;
    }
    50%{
          visibility:hidden;
    opacity:50%;
    width:100%;
    }
    100%{
      opacity:100%;
      width:100%;
    }`;
  } else {
    return keyframes`
      0%{
        opacity:20%;
        width:100%;
      }
      50%{
        visibility:hidden;
      }
      100%{
        visibility:hidden;
        width:100%;
        opacity:0%;
      }
    `;
  }
};

const Layout = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', '', 'column')};
  height: auto;
  min-height: 200px;
  animation: ${(props) => fadeInTypo(props.flag)} 1s;
  animation-fill-mode: forwards;
`;
const MenuTitle = styled.h4`
  font-weight: 700;
  font-size: 15px;
  color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.DEFAULT};
`;

const ItemLayout = styled.div`
  width: 100%;
  padding: 10px;
  overflow-y: auto;
`;
export const style = { Layout, MenuTitle, ItemLayout };
