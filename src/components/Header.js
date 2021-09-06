import React from 'react';

const Header = ({ props }) => {
  return (
    <div className="header-container">
      <div className="header-contents">
        <p>{props.backButton}</p>
        <p>{props.title}</p>
        <i>
          Mic
        </i>
        <i>
          Gear
        </i>
      </div>
    </div>
  )
}

export default Header;