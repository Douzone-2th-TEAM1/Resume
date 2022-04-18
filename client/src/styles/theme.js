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

const theme = { flexSet, device };
export default theme;
