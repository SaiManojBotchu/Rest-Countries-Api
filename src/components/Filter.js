import React, { useEffect, useState } from 'react';
import '../css/Home.css';

function Filter({ searchFilterCountries }) {
  const [input, setInput] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    searchFilterCountries(input, region);
  }, [input, region]);

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
          onChange={e => setInput(e.target.value)}
          placeholder='Search for a country...'
          autoComplete='off'
        />
      </div>
      <div className='select'>
        <select onChange={e => setRegion(e.target.value)} defaultValue="Filter By Region">
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
