import React from 'react';
import './PhysiotherapyTable.css';

const PhysiotherapyTable = ({ physiotherapyData }) => {
  return (
    <div className="physiotherapy-table-container">
      <table className="physiotherapy-table">
        <thead>
          <tr>
            <th>Centre Name</th>
            <th>Centre Type</th>
            <th>C.C.Number</th>
            <th>Email Address</th>
            <th>Treatment Name</th>
            <th>Treatment Type</th>
           
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {physiotherapyData.length > 0 ? (
            physiotherapyData.map((data, index) => (
              <tr key={index}>
                <td>{data.centreName}</td>
                <td>{data.centreType}</td>
                <td>{data.contactNumber}</td>
                <td>{data.email}</td>
                <td>{data.treatmentName}</td>
                <td>{data.treatmentType}</td>
                <td>{data.duration}</td>
                <td>
                  <button className="more-button">More</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PhysiotherapyTable;
