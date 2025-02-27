import React, { useState } from 'react';

import './DialysisPage.css';
import DialysisUnitForm from '../../components/dialysis/DialysisUnitForm';
import DialysisUnitTable from '../../components/dialysisUnitTable/DialysisUnitTable';


const DialysisPage = () => {
  const [formVisible, setFormVisible] = useState(false); // Initially, the form is hidden
  const [dialysisUnits, setDialysisUnits] = useState([]); // State for the list of dialysis units

  // Handle the "Add New Dialysis Unit" button click
  const handleAddDialysisUnitClick = () => {
    setFormVisible(true); // Show the form
  };

  // Handle form submission
  const handleFormSubmit = (formData) => {
    setDialysisUnits([...dialysisUnits, formData]); // Add the new unit to the list
    setFormVisible(false); // Hide form after submission
  };

  // Handle the "Cancel" button inside the form
  const handleCancel = () => {
    setFormVisible(false); // Hide form on cancel
  };

  return (
    <div>
      <button onClick={handleAddDialysisUnitClick} className="add-dialysis-unit-button">
        Add New Dialysis Unit
      </button>

      {formVisible && (
        <DialysisUnitForm
          onFormSubmit={handleFormSubmit}
          onCancel={handleCancel} // Pass cancel handler to the form
        />
      )}

      <DialysisUnitTable dialysisUnits={dialysisUnits} />
    </div>
  );
};

export default DialysisPage;
