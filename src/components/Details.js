import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useRouteMatch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import getDetails from '../redux/slices/detailsSlice';

const Details = ({ name }) => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  const countryData = useSelector((state) => state.detailsReducer.covidDetails);
  const countryInfo = countryData[name];

  useEffect(async () => {
    if (!countryData.length) {
      await dispatch(getDetails(url));
    }
  }, []);

  return (
    <>
      <Header title="Contry details" backButtonTitle="< Countries" />
      <h2>Details</h2>
      <p>{countryInfo?.name}</p>
      <p>
        Deaths until today:
        {countryInfo?.today_deaths}
      </p>
      <p>
        Deaths today:
        {countryInfo?.today_new_deaths}
      </p>
      <p>
        Confirmed cases until today:
        {countryInfo?.today_confirmed}
      </p>
      <p>
        Confirmed cases today:
        {countryInfo?.today_new_confirmed}
      </p>
    </>
  );
};

Details.propTypes = ({
  name: PropTypes.string,
}).isRequired;

export default Details;
