import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Countries from './components/Countries';
import useFetchState from './hooks/useFetchState';

function Home() {
  const countries = useFetchState([]);
  const [countriesCopy, setCountriesCopy] = useState([]);

  useEffect(() => {
    setCountriesCopy(countries);
  }, [countries]);

  const searchCountries = (input) => {
    const newCountries = countries.filter((country) => {
      const name = country.name.official.toLowerCase();
      if (name.includes(input.toLowerCase())) {
        return country;
      }
      return null;
    });
    setCountriesCopy(newCountries);
  };

  const filterCountries = (region) => {
    const newCountries = countries.filter(country => country.region === region);
    setCountriesCopy(newCountries);
  };

  return (
    <div className='text-white'>
      <Header />
      <Filter searchCountries={searchCountries} filterCountries={filterCountries} />
      <Countries countries={countriesCopy} />
    </div>
  );
}

export default Home;
