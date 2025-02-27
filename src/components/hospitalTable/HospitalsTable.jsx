import React from 'react';
import './HospitalsTable.css';

const HospitalsTable = ({ hospitals }) => {
  return (
    <table className="hospitals-table">
      <thead>
        <tr>
          <th>Hospital ID</th>
          <th>Name</th>
          <th>Contact Number</th>
          <th>Email</th>
          <th>Type</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {hospitals.length > 0 ? (
          hospitals.map((hospital, index) => (
            <tr key={index}>
              <td>{hospital.id}</td>
              <td>{hospital.name}</td>
              <td>{hospital.contactNumber}</td>
              <td>{hospital.email}</td>
              <td>{hospital.type}</td>
              <td>
              
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="no-data">
              No Hospitals Available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default HospitalsTable;
