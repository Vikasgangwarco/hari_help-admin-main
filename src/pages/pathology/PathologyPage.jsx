import React, { useState } from 'react';
import PathologyRegistrationData from '../../components/addPathology/PathologyRegistrationData'; // Import your form component
import PathologyTable from '../../components/pathologyTable/PathologyTable';
// Assuming there's a table component to display registered pathologies
import './PathologyPage.css';

const PathologyPage = () => {
  const [formVisible, setFormVisible] = useState(false); // Initially, the form is hidden
  const [pathologies, setPathologies] = useState([]); // State for the list of registered pathologies

  // Handle the "Add New Pathology" button click
  const handleAddPathologyClick = () => {
    setFormVisible(true); // Show the form
  };

  // Handle form submission
  const handleFormSubmit = (formData) => {
    setPathologies([...pathologies, formData]); // Add the new pathology to the list
    setFormVisible(false); // Hide the form after submission
  };

  // Handle the "Cancel" button inside the form
  const handleCancel = () => {
    setFormVisible(false); // Hide form on cancel
  };

  return (
    <div>
      <button onClick={handleAddPathologyClick} className="add-pathology-button">
        Add New Pathology
      </button>

      {formVisible && (
        <PathologyRegistrationData
          onFormSubmit={handleFormSubmit}
          onCancel={handleCancel} // Pass cancel handler to the form
        />
      )}

      <PathologyTable pathologies={pathologies} /> {/* Render the table to display the list */}
    </div>
  );
};

export default PathologyPage;
