import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Card from './Card';
import '../css/Home.css';

// FIXME: when there are countries less than 4, "justify-between" is not helping
// as that is causing more space between the country cards
function Countries({ countries }) {
  const getAllCountries = () => {
    return countries.map((country) => (
      <Link key={uuid()} to={`/country/${country.name.common}`}>
        <Card
          flag={country.flags.svg}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      </Link>
    ));
  };

  return countries.length ? (
    <div className='Countries'>
      {getAllCountries()}
    </div>
  ) : (
    ''
  );
}

export default Countries;





