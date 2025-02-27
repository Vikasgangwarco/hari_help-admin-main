import React from 'react';
import './BloodBankTable.css';

const BloodBankTable = ({ bloodBanks = [] }) => {
  return (
    <table className="blood-bank-table-bbt">
      <thead>
        <tr>
          <th>Blood Bank ID</th>
          <th>Name</th>
          <th>Contact Number</th>
          <th>Email</th>
          <th>Location</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {bloodBanks.length > 0 ? (
          bloodBanks.map((bloodBank, index) => (
            <tr key={index}>
              <td>{bloodBank.id}</td>
              <td>{bloodBank.name}</td>
              <td>{bloodBank.contactNumber}</td>
              <td>{bloodBank.email}</td>
              <td>{bloodBank.location}</td>
              <td>
                {/* Add buttons or links for actions like view/edit */}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="no-data">
              No Blood Banks Available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default BloodBankTable;
