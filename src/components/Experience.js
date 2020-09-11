import React from 'react';
import './../App.css';

function Experience() {
  return (
    <div className='pv4 pv5-ns bb b--white-60'>
      <h1 className='f3 f2-ns mb4' style={{ fontWeight: 400 }}>
        EXPERIENCE
      </h1>
      <div className='f6 f4-ns lh-copy measure mb3 mb4-ns'>
        <p>
          Frontend Developer Intern @{' '}
          <a
            className='link white dim underline-hover'
            href='https://www.ericsson.com/en'
            target='_blank'
          >
            Ericsson
          </a>
        </p>
        <p></p>
        <p className=''>Aug, 2020 - Present</p>
      </div>

      <div className='f6 f4-ns lh-copy measure'>
        <p>
          Rapid Application Developer Intern @{' '}
          <a
            className='link white dim underline-hover'
            href='https://corporate.exxonmobil.com/'
            target='_blank'
          >
            ExxonMobil
          </a>
        </p>
        <p></p>
        <p className=''>Dec, 2019 - May, 2020</p>
      </div>
    </div>
  );
}

export default Experience;
