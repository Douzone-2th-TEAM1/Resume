import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from 'styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { Provider } from 'react-redux';
import store from 'myRedux/store';
import history from 'utils/history';
import { Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <GlobalStyles />
    <Router history={history}>
      <ThemeProvider theme={{ ...theme }}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
);
