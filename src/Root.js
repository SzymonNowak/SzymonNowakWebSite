import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider thme={theme}>
      <>
        <p>elo</p>
      </>
    </ThemeProvider>
  </div>
);


export default Root;
