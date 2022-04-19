import { css } from 'styled-components';

const flexSet = (justify = 'center', item = 'center', direction = 'row') => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${item};
  flex-direction: ${direction};
`;

const deviceSize = {
  tablet: '768px',
  laptop: '1024px',
};

const device = {
  tablet: `screen and (max-width: ${deviceSize.tablet})`,
  laptop: `screen and (max-width:${deviceSize.laptop})`,
};

const colorSet = {
  PRIMARY: '#334257',
  PRIMARY_DISABLED: {
    DEFAULT: '#cdcdcd',
    OPACITY_70: '#cdcdcd70',
  },
  SECONDARY: '#ffff',
  BORDER: '#a0a0a0',

  ERROR: '#FF0000',
  SUCCESS: '#287D3C',
};
const theme = { flexSet, device, colorSet };
export default theme;
