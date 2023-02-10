import React, { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import Countries from '../components/Countries';
import useFetchState from '../hooks/useFetchState';
import '../css/Home.css';

function Home() {
  const countries = useFetchState([]);
  const [countriesCopy, setCountriesCopy] = useState([]);

  useEffect(() => {
    setCountriesCopy(countries);
  }, [countries]);

  const searchFilterCountries = (input, region) => {
    let newCountries = countries;
    if (input) {
      newCountries = countries.filter((country) => {
        const name = country.name.common.toLowerCase();
        if (name.includes(input.toLowerCase())) {
          return country;
        }
        return null;
      });
    }
    if (region) {
      newCountries = newCountries.filter(
        (country) => region === country.region
      );
    }
    setCountriesCopy(newCountries);
  };

  return (
    <div className='Home'>
      <Filter searchFilterCountries={searchFilterCountries} />
      <Countries countries={countriesCopy} />
    </div>
  );
}

export default Home;
