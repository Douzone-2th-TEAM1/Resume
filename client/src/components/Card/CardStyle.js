import styled from 'styled-components';
import { keyframes } from 'styled-components';

const BobOnHover = keyframes`
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }

`;

const BobOnHoverFloat = keyframes`
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
`;

const Container = styled.div`
  position: absolute;
  overflow-y: scroll;
  bottom: 0;
  min-width: 900px;
  min-height: ${(props) => props.ht};
  /* top: 50vh; */
  /* top: 50vh; */
  transition-property: all;
  transition-duration: 2s;
  z-index: 1;
  background-color: white;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 5px 6px 20px #000025;
`;

const IconLayout = styled.div`
  ${({ theme }) => theme.flexSet()};
  height: 100px;
  display: ${(props) => (props.ht === '400px' ? 'flex' : 'none')};

  &:hover {
    cursor: pointer;
    -webkit-animation-name: ${BobOnHoverFloat}, ${BobOnHover};
    animation-name: ${BobOnHoverFloat}, ${BobOnHover};
    -webkit-animation-duration: 0.3s, 1.5s;
    animation-duration: 0.3s, 1.5s;
    -webkit-animation-delay: 0s, 0.3s;
    animation-delay: 0s, 0.3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
  }
`;
export const style = {
  Container,
  IconLayout,
};
