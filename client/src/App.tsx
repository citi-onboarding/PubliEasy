import React from 'react';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';


// import { Home } from './pages';
import { Service } from './pages'
import { Footer, Metrics } from './pages';
import { ThemeProvider } from 'styled-components';


function App() {
  return (
    <ThemeProvider theme ={theme}>
      {/* <Home/> */}
      <GlobalStyle/>
      <Service/>
      <Metrics/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
