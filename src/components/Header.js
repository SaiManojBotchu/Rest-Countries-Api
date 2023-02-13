import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Header({ dark, toggleTheme }) {
  return (
    <div className='Header'>
      <header>
        <Link to='/'>Where in the world?</Link>
        <button onClick={toggleTheme}>
          <i className={`fa-solid fa-${dark ? 'sun' : 'moon'}`} />
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
    </div>
  );
}

export default Header;
