import { css } from 'styled-components';

const flexSet = (justify = 'center', item = 'center', direction = 'row') => css`
  display: flex;
  justify-contents: ${justify};
  align-items: ${item};
  flex-direction: ${direction};
`;

const mixin = { flexSet };
export default mixin;
