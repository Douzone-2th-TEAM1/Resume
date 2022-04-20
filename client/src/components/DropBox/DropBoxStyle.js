import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 80%;
`;

const Layout = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  position: relative;
  width: 75%;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.colorSet.BORDER};
  border-radius: 5px;
  cursor: pointer;

  input {
    cursor: pointer;
    padding: 10px;
    font-weight: 600;
    font-size: 15px;
    color: ${({ theme }) => theme.colorSet.PRIMARY};
  }
`;

const dropbox = (open) => {
  if (open) {
    return keyframes`
      0% {
        transform: scaleY(0)
      }
      80% {
        transform: scaleY(1.1)
      }
      100% {
        transform: scaleY(1)
    }`;
  } else {
    return keyframes`
      0% {
        transform: scaleY(0)
      }
      50% {
        transform: scaleY(0.5)
      }
      100% {
        transform: scaleY(1)
    }`;
  }
};
const IconLayout = styled.div`
  padding: 10px 7px;
  transform: ${({ open }) => (open ? `rotate(180deg)` : ``)};
  transition: all 0.7s;
`;

const DropLayout = styled.div`
  display: block;
  ${({ theme }) => theme.flexSet('space-between', '', 'column')};
  position: absolute;
  top: 43px;
  left: 0px;
  width: 100%;
  border: ${(props) => (props.open ? `1px solid ${props.theme.colorSet.BORDER}` : 'none')};
  border-radius: 5px;
  perspective: 1000px;
  animation: ${(props) => dropbox(props.open)} 0.5s forwards;
  transform-origin: top center;
  background-color: ${({ theme }) => theme.colorSet.SECONDARY};
`;

const Item = styled.input`
  display: ${(props) => (props.open ? 'block' : 'none')};
  padding: 20px;
  font-weight: 600;
  width: 100%;
  font-size: 15px;
  animation: ${(props) => dropbox(props.open)} 0.5s forwards;
  transform-origin: top center;
  &:hover {
    background-color: ${({ theme }) => theme.colorSet.PRIMARY_DISABLED.OPACITY_70};
  }
`;
export const style = { Wrapper, Layout, DropLayout, IconLayout, Item };
