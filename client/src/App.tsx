import React from 'react';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';


// import { Home } from './pages';
import { Footer, Metrics } from './pages';


function App() {
  return (
    <>
      {/* <Home/> */}
      <GlobalStyle/>
      <Metrics/>
      <Footer/>
    </>
  );
}

export default App;
