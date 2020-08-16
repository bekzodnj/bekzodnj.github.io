import React from 'react';
import './../App.css';

import Experience from './Experience';

function Hero() {
  return (
    <>
      <div className='pv5 pv6-ns pb6 bb b--white-60'>
        <h1 className='f3 f2-ns' style={{ fontWeight: 400 }}>
          Bekzodjon Norkuziev - Frontend & JavaScript
          <br /> developer, currently based in Hungary.
        </h1>
        <p className='f6 f4-ns lh-copy measure '>
          Currently at Ericsson.
          <br /> Mostly work with JavaScript, React, CSS, Express.js.
        </p>
      </div>

      <Experience />
    </>
  );
}

export default Hero;
