import { useState, useEffect } from 'react';
import "./style.css";
import Flags from './Flag';

const apiurl = 'https://restcountries.com/v3.1/all';

function CountryFlag() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch(apiurl);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }
    fetchCountries();
  }, []);

  return (
    <>
    <div className="main">
      {countries.map((country) => (
        <Flags
          key={country.name.common}
          flagImg={country.flags.png}
          flagAlt={country.flags.alt}
          flagName={country.name.common}
        />
      ))}
      </div>
    </>
  );
}

export default CountryFlag;