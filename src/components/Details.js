import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useRouteMatch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import getDetails from '../redux/slices/detailsSlice';

const queryURL = (url, countryData) => {
  const urlArr = url.split('');
  urlArr.shift();
  const urlName = urlArr.join('');
  const countryName = urlName[0].toUpperCase() + urlName.substring(1);
  const countryInfo = countryData[countryName];
  return countryInfo;
};

const Details = ({ name }) => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  const countryData = useSelector((state) => state.detailsReducer.covidDetails);
  console.log('countryData', countryData);
  const countryInfo = queryURL(url, countryData);

  useEffect(async () => {
    if (!countryData.length) {
      console.log('entrei no use effect', name);
      await dispatch(getDetails(url));
    }
  }, []);

  return (
    <>
      <Header title="Contry details" backButton="Countries" />
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
