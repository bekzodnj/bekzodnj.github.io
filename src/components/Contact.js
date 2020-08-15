import React from 'react';
import './../App.css';

function Contact() {
  return (
    <div className='pv3 pb6 bb b--white-60 '>
      <h1 className='f2 mb4' style={{ fontWeight: 400 }}>
        CONTACT
      </h1>

      <div>
        <a className='f6 link dim ba bw1 ph3 pv2 mb2 dib white mr2' href='#0'>
          GitHub &#x2197;
        </a>
        <a className='f6 link dim ba bw1 ph3 pv2 mb2 dib white mr2' href='#0'>
          Dev.to &#x2197;
        </a>
        <a className='f6 link dim ba bw1 ph3 pv2 mb2 dib white mr2' href='#0'>
          Twitter &#x2197;
        </a>
        <a className='f6 link dim ba bw1 ph3 pv2 mb2 dib white' href='#0'>
          LinkedIn &#x2197;
        </a>
      </div>
    </div>
  );
}

export default Contact;
