// MenuLinks.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MenuLink.css'; // Import MenuLinks CSS

const MenuLinks = ({ collapsed }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = React.useState(location.pathname);

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="center">
      <ul>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li className={activeLink === "/" ? "active" : ""}>
            Dashboard
          </li>
        </Link>
        <Link to="/appointments" style={{ textDecoration: 'none' }}>
          <li className={activeLink === "/appointments" ? "active" : ""}>
            Appointments
          </li>
        </Link>
        {/* Add more links as per your needs */}
      </ul>
    </div>
  );
};

export default MenuLinks;
