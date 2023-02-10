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

  const searchCountries = (input, region) => {
    console.log(region);
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
    const newCountries = countries.filter(
      (country) => country.region === region
    );
    setCountriesCopy(newCountries);
  };

  // const getCountryData = (name) => {
  //   return countries.filter(country => country.name.official === name)[0];
  // };

  return (
    <div className='Home'>
      <Filter
        searchCountries={searchCountries}
        filterCountries={filterCountries}
      />
      <Countries countries={countriesCopy} />
    </div>
  );
}

export default Home;
