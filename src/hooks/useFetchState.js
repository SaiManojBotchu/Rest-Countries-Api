import { useEffect, useState } from 'react';

function useFetchState(intialValue) {
  const [state, setState] = useState(intialValue);

  const fetchData = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    try {
      const response = await fetch(url);
      const json = await response.json();
      setState(json);
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
