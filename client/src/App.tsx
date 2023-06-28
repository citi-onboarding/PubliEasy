import React from 'react';
import { GlobalStyle } from './styles/global';
import { Navbar,  AboutUs, Service, Footer, Metrics, Nodemailer } from './pages';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';


function App() {
  return (
    <ThemeProvider theme ={theme}>
      <GlobalStyle/>
      <Navbar/>
      <AboutUs/>
      <Service/>
      <Metrics/>
      <Nodemailer/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
