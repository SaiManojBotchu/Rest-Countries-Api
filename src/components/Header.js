import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Header({ dark, toggleTheme }) {
  return (
    <header>
      <div className='Header'>
        <Link to='/'>Where in the world?</Link>
        <div className='toggle-btn' onClick={toggleTheme}>
          <i className={`fa-solid fa-${dark ? 'sun' : 'moon'}`} />
          <p>{dark ? 'Light Mode' : 'Dark Mode'}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
