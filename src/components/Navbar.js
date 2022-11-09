import React from 'react';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='pv3 f3 bb b--white-60'>
      <div className='d-flex justify-between justify-center-ns'>
        <Link to='/' className='link white dim mr3 mr4-ns'>
          HOME
        </Link>

        <Link to='/about' className='link white dim mr3 mr4-ns'>
          ABOUT
        </Link>
        <Link to='/projects' className='link white dim'>
          PROJECTS
        </Link>
      </div>
    </div>
  );
}

export default App;
