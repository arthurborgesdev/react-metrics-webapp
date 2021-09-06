import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import Details from './Details';

const Home = () => {
  const { url } = useRouteMatch();
  // const match = useRouteMatch();

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
      <Switch>
        <Route exact path={`${url}${country.name[0].toLowerCase()}`} component={Details}>
          <Details />
        </Route>
      </Switch>
    </div>
  ));

  return (
    <>
      <Header title="Countries" backButton="App" />
      { countriesList }
    </>
  );
};

export default Home;
