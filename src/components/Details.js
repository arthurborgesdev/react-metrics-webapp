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

  useEffect(async () => {
    await dispatch(getDetails(url));
  }, []);

  const countryData = useSelector((state) => state.detailsReducer.covidDetails);

  const countryInfo = queryURL(url, countryData);

  console.log(countryInfo);
  return (
    <>
      <Header title="Contry details" backButton="Countries" />
      <h2>Details</h2>
      <p>{name}</p>
      <p>Deaths today: </p>
      <p>{}</p>
    </>
  );
};

Details.propTypes = ({
  name: PropTypes.string,
}).isRequired;

export default Details;
