import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Details = ({ name }) => (
  <>
    <Header title="Contry details" backButton="Countries" />
    <h2>Details</h2>
    <p>{name}</p>
    <p>Deaths today: </p>
    <p>{}</p>
  </>
);

Details.propTypes = ({
  name: PropTypes.string,
}).isRequired;

export default Details;
