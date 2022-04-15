import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from 'styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <React.StrictMode>
      <ThemeProvider theme={{ ...theme }}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </>,
);
