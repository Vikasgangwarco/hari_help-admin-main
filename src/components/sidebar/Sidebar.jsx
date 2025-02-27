import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EventIcon from "@mui/icons-material/Event";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import GroupsIcon from "@mui/icons-material/Groups";
import HealingIcon from "@mui/icons-material/Healing";
import AccessibleIcon from "@mui/icons-material/Accessible";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PeopleIcon from "@mui/icons-material/People";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import DescriptionIcon from '@mui/icons-material/Description';
import MedicationIcon from '@mui/icons-material/Medication';

import "./Sidebar.css";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  // Update active link based on the current location
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Toggle sidebar on mobile/tablet
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      {/* Hamburger Menu (visible on mobile/tablet) */}
      {/* <div className="hamburger-menu" onClick={toggleSidebar}>
        <div></div>
        <div></div>
        <div></div>
      </div> */}

      {/* Sidebar */}
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        {/* Logo and Line */}
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img className="logo" src="/path/to/logo.png" alt="Logo" />
          </Link>
          <div className="line"></div>
        </div>

        {/* Sidebar Menu */}
        <div className="center">
          <ul>
            <p className="title">Primary</p>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <DashboardIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Dashboard
                </span>
              </li>
            </NavLink>

            <NavLink
              to="/hospitals"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <LocalHospitalIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Hospitals
                </span>
              </li>
            </NavLink>
            <NavLink
              to="/doctors"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <PersonAddIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Doctors
                </span>
              </li>
            </NavLink>
            <NavLink
              to="/patients"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <PeopleIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Patients
                </span>
              </li>
            </NavLink>
            <NavLink
              to="/clinic"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <LocalHospitalIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Clinics
                </span>
              </li>
            </NavLink>
            <NavLink
              to="/appointments"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <EventIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Appointments
                </span>
              </li>
            </NavLink>
            <NavLink
              to="/pharmacy"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <LocalPharmacyIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Pharmacy
                </span>
              </li>
            </NavLink>
            {/* <NavLink
              to="/medicines"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <MedicationIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Medicines
                </span>
              </li>
            </NavLink> */}
            <p className="title">LISTS</p>
            <NavLink
              to="/patientmitra"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <HealthAndSafetyIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Patient Mitra
                </span>
              </li>
            </NavLink>

            <NavLink
              to="/pathology"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <PsychologyOutlinedIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Pathology
                </span>
              </li>
            </NavLink>

            <NavLink
              to="/blood-bank"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <BloodtypeIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Blood Bank
                </span>
              </li>
            </NavLink>
            <NavLink
              to="/reports"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <DescriptionIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Reports
                </span>
              </li>
            </NavLink>
            <NavLink
              to="/physiotherapy"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <AccessibleIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Physiotherapy
                </span>
              </li>
            </NavLink>

            <NavLink
              to="/dialysis"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <HealingIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Dialysis
                </span>
              </li>
            </NavLink>

            <p className="title">USER</p>
            <NavLink
              to="/staff"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <GroupsIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Staff
                </span>
              </li>
            </NavLink>

            <NavLink
              to="/logout"
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }}
            >
              <li>
                <ExitToAppIcon className="icon" />
                <span className={`text ${collapsed ? "hidden" : ""}`}>
                  Logout
                </span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
