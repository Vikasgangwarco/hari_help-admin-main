import React, { useState } from 'react';
import './StaffPage.css'; // Import custom CSS for styling
import StaffForm from '../../components/addStaff/StaffForm'; // Import the StaffForm component
import StaffTable from '../../components/staffTable/StaffTable';


const StaffPage = () => {
  const [formVisible, setFormVisible] = useState(false); // Initially, the form is hidden
  const [staffData, setStaffData] = useState([]); // Store the submitted staff data

  // Handle the "Add Staff" button click
  const handleAddStaffClick = () => {
    setFormVisible(true); // Show the form when the button is clicked
  };

  // Handle form submission
  const handleFormSubmit = (formData) => {
    setStaffData([...staffData, formData]); // Add the new staff data to the list
    setFormVisible(false); // Hide the form after submission
  };

  // Handle the "Cancel" button inside the form
  const handleCancel = () => {
    setFormVisible(false); // Hide form on cancel
  };

  return (
    <div>
      <button onClick={handleAddStaffClick} className="add-staff-button">
        Add New Staff
      </button>

      {formVisible && (
        <StaffForm
          onFormSubmit={handleFormSubmit}
          onCancel={handleCancel} // Pass cancel handler to the form
        />
      )}

      {/* Pass the staff data to the StaffTable component */}
      <StaffTable staffData={staffData} />
    </div>
  );
};

export default StaffPage;
