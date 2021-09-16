import React from 'react';
import { useState, useEffect } from 'react';
import './../App.css';

// Contact component
// reued in each page
function Contact() {
  const [isEmailClicked, setEmailClicked] = useState(false);

  useEffect(() => {
    setEmailClicked(false);
  }, []);

  return (
    <div className='pv4 pb5-ns bb b--white-60 '>
      <h1 className='f3 f2-ns mb4' style={{ fontWeight: 400 }}>
        Contact
      </h1>

      <div>
        <button
          style={{ background: 'transparent', color: 'white' }}
          className='f6 link dim ba bw1 ph4 pv2 mb2 dib white mr2'
          onClick={() => {
            navigator.clipboard.writeText('bekzodnx@gmail.com');
            setEmailClicked(true);
          }}
        >
          {isEmailClicked ? (
            <span className='tooltip-email'>
              Copied to clipboard{' '}
              <span role='img' aria-label='done emoji'>
                &#9989;
              </span>
              :
            </span>
          ) : (
            <span className='tooltip-email'>Click to copy email: </span>
          )}{' '}
          bekzodnx@gmail.com
        </button>
        <a
          className='f6 link dim ba bw1 ph4 pv2 mb2 dib white mr2'
          href='https://github.com/bekzodnj'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub &#x2197;
        </a>
        <a
          className='f6 link dim ba bw1 ph3 pv2 mb2 dib white mr2'
          href='https://twitter.com/bekzodnj'
          target='_blank'
          rel='noopener noreferrer'
        >
          Twitter &#x2197;
        </a>
        <a
          className='f6 link dim ba bw1 ph3 pv2 mb2 dib white'
          href='https://www.linkedin.com/in/bekzodjon/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn &#x2197;
        </a>
      </div>
    </div>
  );
}

export default Contact;
