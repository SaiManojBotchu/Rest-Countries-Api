import { useEffect, useState } from 'react';

function useFetchState(name) {
  const [state, setState] = useState([]);

  const fetchData = async () => {
    const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setState(json);
    } catch (err) {
      console.error(`Error${err}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return state;
}

export default useFetchState;
