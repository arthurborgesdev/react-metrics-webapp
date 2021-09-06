import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ backButton, title }) => (
  <div className="header-container">
    <div className="header-contents">
      <p>{backButton}</p>
      <p>{title}</p>
      <i>
        Mic
      </i>
      <i>
        Gear
      </i>
    </div>
  </div>
);

Header.propTypes = ({
  title: PropTypes.string,
  backButton: PropTypes.string,
}).isRequired;

export default Header;
