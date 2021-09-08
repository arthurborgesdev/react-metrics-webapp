import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ minDeaths, handleMinNumberOfDeaths }) => (
  <div className="deaths-filter">
    {' Filter by minimum number of Deaths: '}
    <input
      type="number"
      id="deaths-range"
      name="death-range"
      min="0"
      max="9999999999"
      value={minDeaths}
      onChange={handleMinNumberOfDeaths}
    />
  </div>
);

Filter.propTypes = ({
  minDeaths: PropTypes.number,
  handleMinNumberOfDeaths: PropTypes.func,
}).isRequired;

export default Filter;
