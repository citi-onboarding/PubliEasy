import React from 'react';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


// import { Home } from './pages';
import { Navbar } from './pages';
import { AboutUs } from './pages';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <AboutUs/>
      </>
  );
}

export default App;
