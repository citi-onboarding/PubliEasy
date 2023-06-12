import React from 'react';
import { GlobalStyle } from './styles/global';
import { Navbar,  AboutUs, Service, Footer, Metrics } from './pages';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';


function App() {
  return (
    <ThemeProvider theme ={theme}>
      <Navbar/>
      <AboutUs/>
      <Service/>
      <Metrics/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
