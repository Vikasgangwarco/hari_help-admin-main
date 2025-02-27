import React from 'react';
import './StaffTable.css';  // Import custom CSS for styling

const StaffTable = ({ staffData }) => {
  return (
    <div className="staff-table-container">
      <table className="staff-table">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Full Name</th>
          
            <th>Gender</th>
        
            <th>Department</th>
            <th>Contact Number</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {staffData.length > 0 ? (
            staffData.map((staff, index) => (
              <tr key={index}>
                <td>{staff.staffId}</td>
                <td>{staff.fullName}</td>
           
                <td>{staff.gender}</td>
           
                <td>{staff.department}</td>
                <td>{staff.contactNumber}</td>
                <td>{staff.More}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-data">
                No Staff Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;
