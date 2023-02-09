import React, { useState } from 'react';
import '../css/Home.css';

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
    <div className='Filter'>
      <div className='Search'>
        <label htmlFor='input'>
          <i className='fa-solid fa-magnifying-glass' />
        </label>
        <input
          id='input'
          type='text'
          value={input}
          onChange={handleInputChange}
          placeholder='Search for a country...'
          autoComplete='off'
        />
      </div>
      <div className='select'>
        <select onChange={handleFilterChange} defaultValue="Filter By Region">
          <option value="Filter By Region" disabled>Filter By Region</option>
          <option>Asia</option>
          <option>Africa</option>
          <option>Europe</option>
          <option>Americas</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
