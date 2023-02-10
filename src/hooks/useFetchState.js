import { useEffect, useState } from 'react';
import sortJson from '../utils/sortJson';

function useFetchState(intialValue) {
  const [state, setState] = useState(intialValue);

  const fetchData = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    try {
      const response = await fetch(url);
      const json = await response.json();
      // sorting the json data
      setState(sortJson(json));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return state;
}

export default useFetchState;
