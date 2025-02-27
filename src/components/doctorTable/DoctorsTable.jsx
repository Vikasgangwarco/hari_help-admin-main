import React from 'react';
import './DoctorsTable.css';
import { useNavigate } from 'react-router-dom';

const DoctorsTable = ({ doctors }) => {
  const navigate = useNavigate();  // useNavigate hook

  const handleMoreClick = (doctorId) => {
    navigate(`/doctor/${doctorId}`); // Navigate to PatientDetailPage with patientId
  };
  return (
    <table className="doctors-table">
      <thead>
        <tr>
          <th>DoctorID</th> {/* Added Doctor ID column */}
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor, index) => (
          <tr key={index}>
            <td>{doctor._id}</td> {/* Displaying Doctor ID */}
            <td>{doctor.fullName}</td>
            <td>{doctor.email}</td>
            <td>{doctor.contactNumber}</td>
            <td>{doctor.gender}</td>
            <td>
              <button className="more-btn" onClick={() => handleMoreClick(doctor._id)}>
                More
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DoctorsTable;
