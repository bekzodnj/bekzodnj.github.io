import React from 'react';
import 'tachyons';
import 'bootstrap-4-grid';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Contact from './components/Contact';

import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <>
        <div className='center ph4-ns ph4'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Hero} />
            <Route exact path='/' component={Experience} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
          </Switch>
          <Contact />
        </div>
      </>
    </Router>
  );
}

export default App;
