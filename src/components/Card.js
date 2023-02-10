import React from 'react';
import format from '../utils/formatPopulation';
import '../css/Home.css';

function Card({ flag, name, population, region, capital }) {
  return (
    <div className='Card'>
      <div className='Card-img-container'>
        <img src={flag} alt='Image not available' />
      </div>
      <div className='Card-text'>
        <h2>{name || 'No Name'}</h2>
        <p>
          <strong>Population: </strong>
          {population ? format(population) : 'No Population'}
        </p>
        <p>
          <strong>Region: </strong>
          {region || 'No Region'}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital || 'No Capital'}
        </p>
      </div>
    </div>
  );
}

export default Card;
