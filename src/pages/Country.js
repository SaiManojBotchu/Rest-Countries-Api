import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useCountryState from '../hooks/useCountryState';
import '../css/Country.css';

function Country() {
  const { name } = useParams();
  const countryData = useCountryState(name);
  const country = countryData[0];

  return countryData.length === 0 ? (
    <h1>Getting data</h1>
  ) : (
    <div className='Country'>
      {/* FIXME: when going back the state is changing */}
      <Link to='/'>Back</Link>
      <div className='Country-Data'>
        <img src={country.flags.svg} alt='reload' />
        <div>
          <h1>{country.name.official}</h1>
          <p>Native Name: {Object.values(country.name.nativeName)[0].official}</p>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Subregion: {country.subregion}</p>
          <p>Capital: {country.capital}</p>
          <p>Border countries: {country.borders}</p>
        </div>
        <div>
          <p>Top Level Domain: {country.tld[0]}</p>
          <p>Currencies: {Object.values(country.currencies)[0].name}</p>
          <p>Languages: {country.languages.tur}</p>
        </div>
      </div>
    </div>
  );
}

export default Country;
