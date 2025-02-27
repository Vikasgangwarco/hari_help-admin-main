import React, { useState } from 'react';
import HospitalRegistrationForm from '../../components/addNewHospital/HospitalRegistrationForm';
import HospitalsTable from '../../components/hospitalTable/HospitalsTable';
import './HospitalPage.css';


const HospitalPage = () => {
  const [formVisible, setFormVisible] = useState(false); // Initially, the form is hidden
  const [hospitals, setHospitals] = useState([]); // State for the list of hospitals

  // Handle the "Add New Hospital" button click
  const handleAddHospitalClick = () => {
    setFormVisible(true); // Show the form
  };

  // Handle form submission
  const handleFormSubmit = (formData) => {
    setHospitals([...hospitals, formData]); // Add the new hospital to the list
    setFormVisible(false); // Hide form after submission
  };

  // Handle the "Cancel" button inside the form
  const handleCancel = () => {
    setFormVisible(false); // Hide form on cancel
  };

  return (
    <div>
      <button onClick={handleAddHospitalClick} className="add-hospital-button">
        Add New Hospital
      </button>

      {formVisible && (
        <HospitalRegistrationForm 
          onFormSubmit={handleFormSubmit} 
          onCancel={handleCancel} // Pass cancel handler to the form
        />
      )}

      <HospitalsTable hospitals={hospitals} />
    </div>
  );
};

export default HospitalPage;
