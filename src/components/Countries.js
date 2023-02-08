import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Card from './Card';

function Countries({ countries }) {
  const getAllCountries = () => {
    return countries.map((country) => (
      <Link key={uuid()} to={`/country/${country.name.official}`}>
        <Card
          flag={country.flags.svg}
          name={country.name.official}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      </Link>
    ));
  };

  return countries.length ? (
    <div className='flex flex-wrap items-center mx-28'>
      {getAllCountries()}
    </div>
  ) : (
    ''
  );
}

export default Countries;
