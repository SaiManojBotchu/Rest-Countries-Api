import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import format from '../utils/formatPopulation';
import useFetchState from '../hooks/useFetchState';
import '../css/Country.css';

function Country() {
  const { name } = useParams();
  const countries = useFetchState([]);

  const [countryData, setCountryData] = useState([]);
  const [country] = countryData;

  useEffect(() => {
    const data = countries.filter((c) => c.name.common === name);
    setCountryData(data);
  }, [name, countries]);

  const getBorderCountries = (borders) => {
    const newCountries = countries
      .filter((c) => borders.includes(c.cca3))
      .map((c) => c.name.common);
    const newBorders = newCountries.map((c) => (
      <Link key={uuid()} to={`/country/${c}`} className='Border-btn'>
        {c}
      </Link>
    ));
    return newBorders;
  };

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
          <img src={country.flags.svg} alt='Image not available' />
        </div>
        <div className='Text-container'>
          <div>
            <h1>{country.name.common}</h1>
          </div>
          <div className='Country-text'>
            <div className='left-text'>
              <p>
                <strong>Native Name: </strong>
                {country.name.nativeName
                  ? Object.values(country.name.nativeName)[0].common
                  : 'No NativeName'}
              </p>
              <p>
                <strong>Population: </strong>
                {country.population
                  ? format(country.population)
                  : 'No Population'}
              </p>
              <p>
                <strong>Region: </strong>
                {country.region || 'No Region'}
              </p>
              <p>
                <strong>Subregion: </strong>
                {country.subregion || 'No SubRegion'}
              </p>
              <p>
                <strong>Capital: </strong>
                {country.capital || 'No Capital'}
              </p>
            </div>
            <div className='right-text'>
              <p>
                <strong>Top Level Domain: </strong>
                {country.tld ? country.tld[0] : 'No Domain'}
              </p>
              <p>
                <strong>Currencies: </strong>
                {country.currencies
                  ? Object.values(country.currencies)[0].name
                  : 'No Currency'}
              </p>
              <p>
                <strong>Languages: </strong>
                {country.languages
                  ? Object.values(country.languages)[0]
                  : 'No Language'}
              </p>
            </div>
          </div>
          <p>
            <strong>Border countries: </strong>
            {country.borders
              ? getBorderCountries(country.borders)
              : 'No Borders'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Country;
