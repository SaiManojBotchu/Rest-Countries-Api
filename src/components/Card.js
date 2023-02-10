import React from 'react';
import format from '../utils/formatPopulation';
import '../css/Home.css';

function Card({ flag, name, population, region, capital }) {
  return (
    <div className='Card'>
      <div className='Card-img-container'>
        <img src={flag} alt='reload' />
      </div>
      <div className='Card-text'>
        <h2>{name}</h2>
        <p>
          <strong>Population: </strong>
          {format(population)}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
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
