import React from 'react';
import './PathologyTable.css';

const PathologyTable = ({ pathologies }) => {
  return (
    <table className="pathology-table">
      <thead>
        <tr>
          <th>Pathology ID</th>
          <th>Name</th>
          <th>Contact Number</th>
          <th>Email</th>
          <th>Type</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {pathologies.length > 0 ? (
          pathologies.map((pathology, index) => (
            <tr key={index}>
              <td>{pathology.id}</td>
              <td>{pathology.name}</td>
              <td>{pathology.contactNumber}</td>
              <td>{pathology.email}</td>
              <td>{pathology.type}</td>
              <td>
                {/* You can add buttons or links here for actions like view/edit */}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="no-data">
              No Pathologies Available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default PathologyTable;
