import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { Service } from './pages'
// import { Home } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Service/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
