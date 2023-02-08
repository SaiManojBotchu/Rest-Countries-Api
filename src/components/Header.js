import React from 'react';

function Header() {
  return (
    <header className='text-white flex justify-between items-center bg-[#2B3945] h-[8rem] shadow-md px-24'>
      <h3 className='text-[38px] font-black tracking-tight'>
        Where in the world?
      </h3>
      <button className='text-[28px] font-semibold'>
        <i className='fa-solid fa-moon p-2' />
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
