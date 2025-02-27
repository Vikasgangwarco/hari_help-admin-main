import React from 'react';
import './ClinicFormTable.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

const ClinicFormTable = ({ clinics }) => {
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleMoreClick = (clinicId) => {
    navigate(`/clinic/${clinicId}`); // Navigate to clinic detail page using clinicId
  };

  return (
    <table className="clinics-table">
      <thead>
        <tr>
          <th>Clinic ID</th>
          <th>Clinc Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Type</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {clinics.length > 0 ? (
          clinics.map((clinic, index) => (
            <tr key={index}>
              <td>{clinic._id}</td>
              <td>{clinic.clinicName}</td>
              <td>{clinic.contactNumber}</td>
              <td>{clinic.email}</td>
              <td>{clinic.clinicType}</td>
              <td>
                <button 
                  className="more-btn" 
                  onClick={() => handleMoreClick(clinic._id)} // Trigger navigation on button click
                >
                  More
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="no-data">
              No Clinics Available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ClinicFormTable;
