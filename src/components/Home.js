import React from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';

const Home = () => {
  const { url } = useRouteMatch();

  const countries = useSelector((state) => state.covidReducer.covidCountries);
  const countriesList = countries.map((country) => (
    <Link
      key={country.name[0]}
      href="/#"
      to={`${url}${country.name[0].toLowerCase()}`}
      className="country-card"
    >
      <div>
        <div key={country.name[0]} id={country.name[0]} className="country-link">
          <p className="country-name">{country.name[0]}</p>
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
      <Header backButton="< App" title="Higher COVID data" />
      <div className="countries-container">
        { countriesList }
      </div>
    </>
  );
};

export default Home;
