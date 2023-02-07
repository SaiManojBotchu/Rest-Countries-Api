import React from 'react';
import '../css/Card.css';

function Card({ flag, name, population, region, capital }) {
  return (
    <div className='Card'>
      <img src={flag} alt="reload" />
      <p>{name}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </div>
  );
}

export default Card;
