import React from 'react';
import './../App.css';

function Hero() {
  return (
    <div className=''>
      <h1 className='f2 letter-space font-m b' style={{ fontWeight: 'bold' }}>
        Bekzod Norkuziev - Front-end & JavaScript
        <br /> developer, currently based in Hungary.
      </h1>
      <p className='measure lh-copy athelas'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </div>
  );
}

export default Hero;
