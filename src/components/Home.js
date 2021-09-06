import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import getCovid from '../redux/slices/covidSlice';
import Header from './Header';
import Details from './Details';

const Home = () => {
  const dispatch = useDispatch();

  const { path } = useRouteMatch();
  const countries = useSelector((state) => state.covidReducer.covid);

  useEffect(() => {
    if (!countries.length) {
      dispatch(getCovid());
    }
  }, []);

  const countriesList = countries.map((country) => (
    <div key={country.name[0]} className="country-card">
      <Link href="/#">
        <div key={country.name[0]} id={country.name[0]} className="country-link">
          <p>{country.name[0]}</p>
          <p>{country.confirmed}</p>
          <p>{country.deaths}</p>
        </div>
      </Link>
      <Switch>
        <Route path={`${path}/${country.name[0].toLowerCase()}`}>
          <Header title="Contry details" backButton="Countries" />
          <Details />
        </Route>
      </Switch>
    </div>
  ));

  return (
    <>
      { countriesList }
    </>
  );
};

export default Home;
