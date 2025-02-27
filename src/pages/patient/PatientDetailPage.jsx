import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Redux ke liye
import ApiCalls from '../../api/apiCalls'; // API calls ko import kiya
import AddNewPatient from "../../components/addNewPatient/AddNewPatient"; // Form component ko import kiya
import { setLoading } from '../../redux/features/loading/loadingSlice'; // Redux action ko import kiya loading ke liye
import './PatientDetailPage.css';
import { CookieSharp } from '@mui/icons-material';
import { triggerToast } from '../../components/toast/ToastMessage';

const PatientDetailPage = () => {
  const { patientId } = useParams(); // Patient ID ko URL se le rahe hain
  const navigate = useNavigate(); // Navigation handle karne ke liye
  const dispatch = useDispatch(); // Redux dispatch function

  const [patient, setPatient] = useState(null); // State for storing patient data
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode

  const isLoading = useSelector((state) => state.loading.isLoading); // Loading state from Redux

  // Fetch patient details when the page loads
  useEffect(() => {
    const fetchPatientDetails = async () => {
      dispatch(setLoading(true)); // Start loading

      try {
        const response = await ApiCalls.getPatientById(patientId); // API call to fetch patient
        console.log("===========response======",response)
        if (response && response.data) {
          setPatient(response.data); // Set the fetched patient data
        } else {
          alert("Patient not found.");
        }
      } catch (error) {
        console.error('Error fetching patient details:', error);
        alert("Error fetching patient details.");
      } finally {
        dispatch(setLoading(false)); // Stop loading
      }
    };

    fetchPatientDetails();
  }, [patientId, dispatch]);

  // Handle Edit button click
  const handleEditClick = () => {
    // Navigate to the edit page for this patient
    navigate(`/patient/patient_edit/${patientId}`);
    setIsEditing(true); // Enable edit mode
  };

  // Handle Cancel button click
  const handleCancelClick = () => {
    setIsEditing(false); // Disable edit mode
  };

  // Handle Delete button click
  const handleDeleteClick = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this patient?");
    if (!confirmDelete) return; // If user cancels, do nothing
    dispatch(setLoading(true)); // Start loading when deleting
    try {
      const response = await ApiCalls.deletePatient(patientId); // API call to delete patient
      if (response.status === 'success') {
        alert("Patient deleted successfully!");
        navigate("/patients"); // Redirect to patients list after deletion
      } else {
        alert("Error deleting patient.");
      }
    } catch (error) {
      console.error('Error deleting patient:', error);
      alert("An error occurred while deleting the patient.");
    } finally {
      dispatch(setLoading(false)); // Stop loading
    }
  };

  // Handle Save button click (updating patient data)
  const handleSaveClick = async (updatedPatientData) => {
    // Include contactNumber even if we are not editing it, use the old value
    const dataToUpdate = {
      ...updatedPatientData,
    //  contactNumber: patient.contactNumber // Keep the original contact number (don't update it)
    };
    delete dataToUpdate.contactNumber;
    console.log("updatedPatientData======", dataToUpdate)
    console.log('Save button clicked');
    console.log('Data to Update:', dataToUpdate); // This will log the data including the original contact number

    dispatch(setLoading(true)); // Start loading when updating
    try {
      const response = await ApiCalls.updatePatient(patientId, dataToUpdate); // API call to update patient including contactNumber
      console.log('Update API Response:', response); // Log the response from the update API
      if (response.status === 'success') {
        setPatient(response.data); // Update the patient state with the new data
        setIsEditing(false); // Exit edit mode
       // alert("Patient updated successfully!");
       triggerToast(response?.data || 'Done')
          navigate("/patients");
      } else {

        alert("Error updating patient: " + response.message); // Display backend error message
      }
    } catch (error) {
      console.error('Error updating patient:', error);
      alert("An error occurred while updating the patient.");
    } finally {
      dispatch(setLoading(false)); // Stop loading
    }
  };

  // If patient data is still loading
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // If no patient data found
  if (!patient) {
    return <div>Patient data not found</div>;
  }
  return (
    <div className="patient-detail-page">
      <div className="action-buttons">
        <button className="edit-btn" onClick={handleEditClick} disabled={isEditing}>Edit</button>
        <button className="delete-btn" onClick={handleDeleteClick}>Delete</button>
      </div>
      {/* Pass props to AddNewPatient component */}
      <AddNewPatient
        patient={patient}
        disableContact={true}
        isDisabled={!isEditing} // Disable fields if not in edit mode
        onCancel={handleCancelClick} // Handle cancel action
        disableSubmit={!isEditing} // Disable submit button if not in edit mode
        hideCloseButton={true} // Optional: Hide close button
        onSaveBtnClick={handleSaveClick} // Pass save handler to save updates
      />
    </div>
  );
};

export default PatientDetailPage;
