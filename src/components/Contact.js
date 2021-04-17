import React from 'react';
import { useState, useEffect } from 'react';
import './../App.css';

function Contact() {
  const [isEmailClicked, setEmailClicked] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    setEmailClicked(false);
  }, []);

  return (
    <div className='pv4 pb5-ns bb b--white-60 '>
      <h1 className='f3 f2-ns mb4' style={{ fontWeight: 400 }}>
        Contact
      </h1>

      <div>
        <a
          className='f6 dim ba bw1 ph3 pv2 mb2 dib white mr2 email-btn'
          onClick={() => {
            navigator.clipboard.writeText('bekzodnx@gmail.com');
            setEmailClicked(true);
          }}
        >
          {isEmailClicked ? (
            <span className='tooltip-email'>Copied to clipboard: </span>
          ) : (
            <span className='tooltip-email'>Click here to copy: </span>
          )}{' '}
          bekzodnx@gmail.com
        </a>
        <a
          className='f6 link dim ba bw1 ph3 pv2 mb2 dib white mr2'
          href='https://github.com/bekzodnj'
          target='_blank'
        >
          GitHub &#x2197;
        </a>
        <a
          className='f6 link dim ba bw1 ph3 pv2 mb2 dib white mr2'
          href='https://twitter.com/istbek'
          target='_blank'
        >
          Twitter &#x2197;
        </a>
        <a
          className='f6 link dim ba bw1 ph3 pv2 mb2 dib white'
          href='https://www.linkedin.com/in/bekzodjon/'
          target='_blank'
        >
          LinkedIn &#x2197;
        </a>
      </div>
    </div>
  );
}

export default Contact;
