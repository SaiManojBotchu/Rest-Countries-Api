import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useCountryState from '../hooks/useCountryState';
import format from '../utils/formatPopulation';
import '../css/Country.css';

function Country() {
  const { name } = useParams();
  const countryData = useCountryState(name);
  const country = countryData[0];

  return countryData.length === 0 ? (
    <h1>Getting data</h1>
  ) : (
    <div className='Container'>
      {/* FIXME: when going back the state is changing */}
      <div className='Back-btn'>
        <Link to='/'>
          <i className='fa-sharp fa-solid fa-arrow-left' />
          Back
        </Link>
      </div>
      <div className='Country'>
        <div className='Img-container'>
          <img src={country.flags.svg} alt='reload' />
        </div>
        <div className='Text-container'>
          <div>
            <h1>{country.name.common}</h1>
          </div>
          <div className='Country-text'>
            <div className='left-text'>
              <p>
                <strong>Native Name: </strong>
                {Object.values(country.name.nativeName)[0].common}
              </p>
              <p>
                <strong>Population: </strong>
                {format(country.population)}
              </p>
              <p>
                <strong>Region: </strong>
                {country.region}
              </p>
              <p>
                <strong>Subregion: </strong>
                {country.subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {country.capital}
              </p>
            </div>
            <div className='right-text'>
              <p>
                <strong>Top Level Domain: </strong>
                {country.tld[0]}
              </p>
              <p>
                <strong>Currencies: </strong>
                {Object.values(country.currencies)[0].name}
              </p>
              <p>
                <strong>Languages: </strong>
                {Object.values(country.languages)[0]}
              </p>
            </div>
          </div>
          <p>
            <strong>Border countries: </strong>
            {country.borders ? country.borders : 'No Borders'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Country;
