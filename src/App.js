import React from 'react';
import 'tachyons';
import 'bootstrap-4-grid';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className='center ph4-ns'>
        <Navbar />
        <Hero />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default App;
