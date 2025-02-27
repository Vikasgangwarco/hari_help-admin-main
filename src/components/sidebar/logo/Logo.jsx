// Logo.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css'; // Import Logo CSS

const Logo = () => {
  return (
    <div className="top">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img className="logo" src="/path/to/logo.png" alt="Logo" />
      </Link>
      <div className="line"></div>
    </div>
  );
};

export default Logo;
