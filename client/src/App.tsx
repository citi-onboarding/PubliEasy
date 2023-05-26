import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
// import { GlobalStyle } from './styles/global';


// import { Home } from './pages';
import { Navbar } from './pages';
import { AboutUs } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
      <AboutUs></AboutUs>
    </ThemeProvider>
  );
}

export default App;
