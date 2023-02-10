import React, { useState } from 'react';
import '../css/Home.css';

function Filter({ searchFilterCountries }) {
  const [input, setInput] = useState('');
  const [region, setRegion] = useState('');

  // FIXME: input is not updating properly
  const handleInputChange = (evt) => {
    setInput(evt.target.value);
    searchFilterCountries(evt.target.value, region);
    // searchFilterCountries(input, region);
  };

  // FIXME: region is not updating properly
  const handleFilterChange = (evt) => {
    setRegion(evt.target.value);
    searchFilterCountries(input, evt.target.value);
    // searchFilterCountries(input, region);
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
          <option>Africa</option>
          <option>Americas</option>
          <option>Antarctic</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
