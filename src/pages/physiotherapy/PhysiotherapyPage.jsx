import React, { useState } from 'react';

import './PhysiotherapyPage.css'; // Import custom CSS for styling
import PhysiotheripyForm from '../../components/addPhysiotheripy/PhysiotheripyForm';
import PhysiotherapyTable from '../../components/physiotheripyTable/PhysiotherapyTable';


const PhysiotherapyPage = () => {
  const [formVisible, setFormVisible] = useState(false); // Initially, the form is hidden
  const [physiotherapyData, setPhysiotherapyData] = useState([]); // Store the submitted physiotherapy data

  // Handle the "Add Physiotherapy" button click
  const handleAddPhysiotherapyClick = () => {
    setFormVisible(true); // Show the form when the button is clicked
  };

  // Handle form submission
  const handleFormSubmit = (formData) => {
    setPhysiotherapyData([...physiotherapyData, formData]); // Add the new physiotherapy data to the list
    setFormVisible(false); // Hide the form after submission
  };

  // Handle the "Cancel" button inside the form
  const handleCancel = () => {
    setFormVisible(false); // Hide form on cancel
  };

  return (
    <div>
      <button onClick={handleAddPhysiotherapyClick} className="add-physiotherapy-button">
      Add New Physiotherapist
      </button>

      {formVisible && (
        <PhysiotheripyForm
          onFormSubmit={handleFormSubmit}
          onCancel={handleCancel} // Pass cancel handler to the form
        />
      )}

      {/* Pass the physiotherapy data to the PhysiotherapyTable component */}
      <PhysiotherapyTable physiotherapyData={physiotherapyData} />
    </div>
  );
};

export default PhysiotherapyPage;
