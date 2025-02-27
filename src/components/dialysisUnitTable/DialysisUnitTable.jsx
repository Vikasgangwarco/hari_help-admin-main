import React from 'react';
import './DialysisUnitTable.css';

const DialysisUnitTable = ({ dialysisUnits }) => {
  return (
    <table className="dialysis-units-table">
      <thead>
        <tr>
          <th>Unit ID</th>
          <th>Name</th>
          <th>Contact Number</th>
          <th>Email</th>
          <th>Location</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {dialysisUnits.length > 0 ? (
          dialysisUnits.map((unit, index) => (
            <tr key={index}>
              <td>{unit.id}</td>
              <td>{unit.name}</td>
              <td>{unit.contactNumber}</td>
              <td>{unit.email}</td>
              <td>{unit.location}</td>
              <td>
                {/* Add additional actions here if needed */}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="no-data">
              No Dialysis Units Available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default DialysisUnitTable;
