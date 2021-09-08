import React, { useState } from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import Filter from './Filter';

const Home = () => {
  const { url } = useRouteMatch();
  const [minDeaths, setMinDeaths] = useState(0);

  const handleMinNumberOfDeaths = (e) => {
    setMinDeaths(e.target.value);
  };

  const countries = useSelector((state) => state.covidReducer.covidCountries);
  const countriesList = countries.filter((country) => minDeaths < country.deaths)
    .map((country) => (
      <Link
        key={country.name[0]}
        href="/#"
        to={`${url}${country.name[0].toLowerCase()}`}
        className="country-card"
      >
        <div>
          <div key={country.name[0]} id={country.name[0]} className="country-link">
            <h2 className="country-name">{country.name[0]}</h2>
            <p className="cases-confirmed">
              TOTAL CASES CONFIRMED:
              {' '}
              {country.confirmed}
            </p>
            <p className="deaths">
              TOTAL DEATHS:
              {' '}
              {country.deaths}
            </p>
          </div>
        </div>
      </Link>
    ));

  return (
    <>
      <Header backButtonTitle="< App" title="COVID data by Countries" />
      <Filter value={minDeaths} handler={handleMinNumberOfDeaths} />
      <div className="countries-container">
        { countriesList }
      </div>
    </>
  );
};

export default Home;
