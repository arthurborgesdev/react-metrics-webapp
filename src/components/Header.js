import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import BackButton from './BackButton';

const Header = ({ backButtonTitle, title }) => (
  <div className="header-container">
    <div className="header-contents">
      <BackButton title={backButtonTitle} />
      <p>{title}</p>
      <div className="header-icons">
        <FontAwesomeIcon icon={faMicrophone} size="lg" color="#fff" className="header-icon" />
        <FontAwesomeIcon icon={faCog} size="lg" color="#fff" className="header-icon" />
      </div>
    </div>
  </div>
);

Header.propTypes = ({
  title: PropTypes.string,
  backButton: PropTypes.string,
}).isRequired;

export default Header;
