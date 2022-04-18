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
  PRIMARY: '#383d52',
  PRIMIARY_DISABLED: '#cdcdcd',
  SECONDARY: '#ffff',

  ERROR: '#FF0000',
  SUCCESS: '#287D3C',
};
const theme = { flexSet, device, colorSet };
export default theme;
