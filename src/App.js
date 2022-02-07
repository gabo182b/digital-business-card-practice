import React from 'react';
import { Info } from './Components/Info'
import { About } from './Components/About'
import { Interests } from './Components/Interests'
import { Footer } from './Components/Footer'
import './style.css'

function App() {
  return (
    <>
      <Info />
      <About />
      <Interests />
      <Footer />
    </>
  );
}

export { App };
