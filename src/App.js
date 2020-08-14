import React from 'react';
import 'tachyons';
import 'bootstrap-4-grid';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Navbar />

      <div className='container'>
        <Hero />
      </div>
    </>
  );
}

export default App;
