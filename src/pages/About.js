import React from 'react';
import './../App.css';

function About() {
  return (
    <div className='pv5 pv6-ns bb b--white-60'>
      <h1 className='f3 f2-ns' style={{ fontWeight: 400 }}>
        About Me
      </h1>
      <p className='f6 f4-ns lh-copy measure  mw7'>
        Hello, I'm Bekzod, frontend developer. I studied at{' '}
        <a
          className='link white dim underline underline-hover'
          href='https://www.bme.hu/'
          target='_blank'
          rel='noopener noreferrer'
        >
          BME
        </a>{' '}
        majoring in Computer Engineering. Currently I'm working as a Developer
        at Ericsson.
      </p>
    </div>
  );
}

export default About;
