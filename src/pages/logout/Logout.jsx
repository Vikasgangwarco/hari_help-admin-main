// src/pages/logout/Logout.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = ({ handleLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Call the handleLogout function to update the state and clear localStorage
    handleLogout();

    // Redirect to the login page
    navigate("/login");
  }, [navigate, handleLogout]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default LogoutPage;
