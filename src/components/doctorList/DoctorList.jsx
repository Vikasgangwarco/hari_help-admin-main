import React, { useState } from 'react';
import './DoctorList.css';

const DoctorList = ({ doctors }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleShowMore = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div className="doctor-list">
      <table>
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>Full Name</th>
            <th>Contact Number</th>
            <th>M.R.Number</th>
            <th>Qualifications</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{doctor.fullName}</td>
              <td>{doctor.contactNumber}</td>
              <td>{doctor.medicalRegistrationNumber}</td>
              <td>{doctor.qualifications}</td>
              <td>
                <button
                  className="more-btn"
                  onClick={() => handleShowMore(doctor)}
                >
                  More
                </button>
                {selectedDoctor === doctor && (
                  <div className="more-info">
                    <p><strong>Full Name:</strong> {doctor.fullName}</p>
                    <p><strong>Contact Number:</strong> {doctor.contactNumber}</p>
                    <p><strong>MR Number:</strong> {doctor.medicalRegistrationNumber}</p>
                    <p><strong>Qualifications:</strong> {doctor.qualifications}</p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
