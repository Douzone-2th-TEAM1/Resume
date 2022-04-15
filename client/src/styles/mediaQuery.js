const deviceSize = {
  tablet: '768px',
  laptop: '1024px',
};

const device = {
  tablet: `screen and (max-width: ${deviceSize.tablet})`,
  laptop: `screen and (max-width:${deviceSize.laptop})`,
};

const theme = { device };
export default theme;
