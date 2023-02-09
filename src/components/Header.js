import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  return (
    <header className='Header'>
      <Link to='/' className='Header-title'>Where in the world?</Link>
      <button className='toggle-btn'>
        <i className='fa-solid fa-moon toggle-icon' />
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
