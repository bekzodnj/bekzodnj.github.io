import React from 'react';
import './../App.css';

function Hero() {
  return (
    <div className='pt5 bb b--white-60 vh-100-ns vh-75-l'>
      <h1 className='f2' style={{ fontWeight: 400 }}>
        Bekzodjon Norkuziev - Frontend & JavaScript
        <br /> developer, currently based in Hungary.
      </h1>
      <p className='f4 lh-copy measure mw7'>
        Currently at Ericsson. I like clear user-interfaces.
        <br /> Mostly work with JavaScript, React, CSS, Express.js.
      </p>
    </div>
  );
}

export default Hero;
