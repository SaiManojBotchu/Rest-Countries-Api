import React from 'react';
import Card from './Card';

function Countries({ countries }) {
  return countries.length ? (
    <div className='flex flex-wrap justify-between items-center mx-28'>
      {countries.map((country, ind) => (
        <Card
          key={ind}
          flag={country.flags.svg}
          name={country.name.official}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </div>
  ) : (
    ''
  );
}

export default Countries;
