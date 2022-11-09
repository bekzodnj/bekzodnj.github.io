import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className='pb7 bb b--white-60'>
      <h1 className='f3 f2-ns project-header' style={{ fontWeight: 400 }}>
        Projects
      </h1>

      <div className='card f4'>
        <p className='description'>
          &#8212; Interactive examples of{' '}
          <a
            href='https://reacthooksapp.vercel.app/'
            rel='noopener noreferrer'
            target='_blank'
          >
            React Hooks
          </a>
          <span className='ml2' role='img' aria-label='rocket emoji'>
            🚀
          </span>
        </p>
      </div>
    </div>
  );
}

export default Projects;
