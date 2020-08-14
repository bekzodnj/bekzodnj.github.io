import React from 'react';
import './../App.css';

function Hero() {
  return (
    <div className='pt5'>
      <h1 className='f2' style={{ fontWeight: 400 }}>
        Bekzodjon Norkuziev - Frontend & JavaScript
        <br /> developer, currently based in Hungary.
      </h1>
      <p className='f4 mw7'>
        Currently at Ericsson. I like clear user-interfaces. Mostly work with
        JavaScript, React, CSS, Express.js.
      </p>
    </div>
  );
}

export default Hero;
