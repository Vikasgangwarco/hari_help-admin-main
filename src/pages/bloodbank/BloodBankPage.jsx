import React, { useState } from 'react';
import BloodBankForm from '../../components/bloodBankForm/BloodBankForm';
import './BloodBankPage.css';
import BloodBankTable from '../../components/bloodBankDataTable/BloodBankTable';

const BloodBankPage = () => {
  const [formVisible, setFormVisible] = useState(false); // Initially, the form is hidden
  const [bloodBanks, setBloodBanks] = useState([]); // State for the list of blood banks

  // Handle the "Add New Blood Bank" button click
  const handleAddBloodBankClick = () => {
    setFormVisible(true); // Show the form
  };

  // Handle form submission
  const handleFormSubmit = (formData) => {
    setBloodBanks([...bloodBanks, formData]); // Add the new blood bank to the list
    setFormVisible(false); // Hide form after submission
  };

  // Handle the "Cancel" button inside the form
  const handleCancel = () => {
    setFormVisible(false); // Hide form on cancel
  };

  return (
    <div>
      <button onClick={handleAddBloodBankClick} className="add-blood-bank-btn">
        Add Blood Bank
      </button>

      {formVisible && (
        <BloodBankForm
          onFormSubmit={handleFormSubmit}
          onCancel={handleCancel} // Pass cancel handler to the form
        />
      )}

      <BloodBankTable bloodBanks={bloodBanks} />
    </div>
  );
};

export default BloodBankPage;
