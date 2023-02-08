import React, { useState } from 'react';
import '../css/Form.css';

function Filter({ searchCountries, filterCountries }) {
  const [input, setInput] = useState('');
  const [region, setRegion] = useState('');

  // FIXME: input is not updating properly
  const handleInputChange = (evt) => {
    setInput(evt.target.value);
    searchCountries(evt.target.value);
  };

  // FIXME: region is not updating properly
  const handleFilterChange = (evt) => {
    setRegion(evt.target.value);
    filterCountries(evt.target.value);
  };

  return (
    <div>
      <form className='Form rounded-md bg-[#2B3945] p-4'>
        <i className='fa-solid fa-magnifying-glass p-4 text-[30px] font-extrabold' />
        <input type='text' value={input} onChange={handleInputChange} placeholder='Search for a country...' />
      </form>
      <select value={region} onChange={handleFilterChange}>
        {/* FIXME: Filter by region should not be a option */}
        <option>Filter By Region</option>
        <option>Asia</option>
        <option>Africa</option>
        <option>Europe</option>
        <option>Americas</option>
      </select>
    </div>

  );
}

export default Filter;
