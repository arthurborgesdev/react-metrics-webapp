import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getCovid from '../redux/slices/covidSlice';

const Home = () => {
  const countries = useSelector((state) => state.covidReducer.covidCountries);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!countries.length) {
      dispatch(getCovid());
    }
  }, []);

  const countriesList = countries.map((country) => (
    <div key={country.name[0]} id={country.name[0]} className="country-card">
      <p>{country.name[0]}</p>
      <p>{country.confirmed}</p>
      <p>{country.deaths}</p>
    </div>
  ));

  return (
    <>
      { countriesList }
    </>
  );
};

export default Home;
