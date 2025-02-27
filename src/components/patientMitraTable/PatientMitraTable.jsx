import React from "react";
import "./PatientMitraTable.css"; // Import the unique CSS for this table
import { useNavigate } from "react-router-dom";

const PatientMitraTable = ({ patientMitras }) => {
  const navigate = useNavigate(); // useNavigate hook

  const handleMoreClick = (patientMitraId) => {
    navigate(`/patientmitra/${patientMitraId}`); // Navigate to PatientDetailPage with patientId
  };

  return (
    <div className="patient-mitra-table-container">
      <table className="patient-mitra-table">
        <thead>
          <tr>
            <th>PatientMitra ID</th>
            <th>Name</th>

            <th>Phone</th>
            <th>Email</th>
            <th>City</th>

            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {patientMitras.map((patientMitra, index) => (
            <tr key={index}>
              <td>{patientMitra._id}</td>
              <td>{patientMitra.fullName}</td>
              {/* <td>{mitra.age}</td> */}
              <td>{patientMitra.contactNumber}</td>
              <td>{patientMitra.emailAddress}</td>
              <td>{patientMitra.city}</td>
              {/* <td>{mitra.country}</td> */}
              <td>
                {/* Optional buttons or actions */}
                <button
                  className="more-btn"
                  onClick={() => handleMoreClick(patientMitra._id)}
                >
                  More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientMitraTable;
