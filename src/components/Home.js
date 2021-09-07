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
    <div key={country.name[0]} className="country-card">
      <Link href="/#" to={`${url}${country.name[0].toLowerCase()}`}>
        <div key={country.name[0]} id={country.name[0]} className="country-link">
          <p>{country.name[0]}</p>
          <p>{country.confirmed}</p>
          <p>{country.deaths}</p>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <Header backButton="App" title="Greatest COVID numbers - Countries" />
      { countriesList }
    </>
  );
};

export default Home;
