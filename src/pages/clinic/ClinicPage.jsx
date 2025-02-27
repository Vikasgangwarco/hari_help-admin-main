import React, { useState, useEffect } from 'react';
import ClinicForm from '../../components/addClinic/ClinicForm';  // Assuming this is your Clinic Form component
import ClinicFormTable from '../../components/clinicTable/ClinicFormTable'; // Assuming this is your Clinic Table component
import './ClinicPage.css';
import { setLoading } from '../../redux/features/loading/loadingSlice';
import { useDispatch } from 'react-redux';
import { triggerToast } from '../../components/toast/ToastMessage'; // Assuming this is for toast notifications
import { hitGetClinicsList, CreateClinic } from '../../redux/features/clinics/clinicsApiCall'; // API calls for clinics

const ClinicPage = () => {
  const [formVisible, setFormVisible] = useState(false); // Initially, the form is hidden
  const [clinics, setClinics] = useState([]); // State for the list of clinics
  const dispatch = useDispatch(); // For dispatching actions (e.g., loading state)

  // Handle the "Add New Clinic" button click
  const handleAddClinicClick = () => {
    setFormVisible(true); // Show the form when clicked
  };

  // Fetch list of clinics from API
  const fetchClinicsList = async () => {
    dispatch(setLoading(true)); // Show loading indicator
    try {
      const response = await hitGetClinicsList(); // Fetch clinics list from API
      dispatch(setLoading(false)); // Hide loading indicator
      setClinics(response?.data); // Update clinics state with the fetched list
    } catch (error) {
      console.error("Error fetching clinics:", error);
      dispatch(setLoading(false)); // Hide loading indicator
    }
  };

  // Handle form submission (e.g., adding a new clinic)
  const handleFormSubmit = (formData) => {
    console.log("=====handleFormSubmit=======",formData)
    dispatch(setLoading(true)); // Show loading indicator
    CreateClinic(formData) // Assuming CreateClinic is the API function for adding a clinic
      .then((response) => {
        console.log("==========CreateClinic=======",response)
        fetchClinicsList(); // Fetch the updated list of clinics
        triggerToast(response?.message); // Show success toast
        dispatch(setLoading(false)); // Hide loading indicator
       // setFormVisible(false); // Close form after successful submission
      })
      .catch((error) => {
        console.error("Error in clinic registration:", error);
        dispatch(setLoading(false)); // Hide loading indicator
      });
  };

  // Handle the "Cancel" button inside the form
  const handleCancel = () => {
    setFormVisible(false); // Hide form when canceled
  };

  // Fetch clinics list on component mount
  useEffect(() => {
    fetchClinicsList(); // Fetch the clinics data when the component mounts
  }, []);

  return (
    <div className="clinic-page">
      <button onClick={handleAddClinicClick} className="add-clinic-button">
        Add New Clinic
      </button>

      {/* Render the ClinicForm only when formVisible is true */}
      {formVisible && (
        <ClinicForm
          onFormSubmit={handleFormSubmit} // Pass form submission handler
          onCancel={handleCancel} // Pass cancel handler
        />
      )}

      {/* Render the ClinicFormTable to display the list of clinics */}
      <ClinicFormTable clinics={clinics} /> 
    </div>
  );
};

export default ClinicPage;
