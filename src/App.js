import React from 'react';
import 'tachyons';
import 'bootstrap-4-grid';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
