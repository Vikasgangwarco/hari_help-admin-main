import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { hitClinicDelete, hitEditClinic, hitGetSingleClinic } from '../../redux/features/clinics/clinicsApiCall'
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/features/loading/loadingSlice';
import { triggerToast } from '../../components/toast/ToastMessage';
// Assuming this is a similar form component
import './ClinicDetailPage.css'; // Import the specific CSS file
import ClinicForm from '../../components/addClinic/ClinicForm';

const ClinicDetailPage = () => {
  const { clinicId } = useParams(); // Get clinicId from URL params
  const [clinic, setClinic] = useState(null); // Store the clinic data in state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Fetch the details of a single clinic
  const getSingleClinicData = async () => {
    dispatch(setLoading(true));
    try {
      let response = await hitGetSingleClinics(clinicId);
      if (response?.status === 'success') {
        setClinic(response?.data);
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  // Fetch clinic data on component mount
  useEffect(() => {
    getSingleClinicData();
  }, [clinicId]);

  // Handle the edit button click (navigate to edit page)
  const handleEditClick = () => {
    console.log(`/clinic/clinic_edit/${clinicId}`);
    navigate(`/clinic/clinic_edit/${clinicId}`);
  };

  // Handle the delete button click (send delete request)
  const handleDeleteClick = async () => {
    try {
      let response = await hitClinicDelete(clinicId);
      triggerToast(response?.message);
      if (response?.status === 'success') {
        navigate("/clinics"); // Redirect to clinic list after successful delete
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle the form submission (update clinic data)
  const handleFormSubmit = async (formData) => {
    try {
      const dataToUpdate = {
        ...formData,
      };
      let response = await hitEditClinics(clinicId, dataToUpdate);
      triggerToast(response?.message);
      if (response?.status === 'success') {
        navigate("/clinics"); // Redirect to clinic list after successful update
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="clinic-detail-page">
      <div className="action-buttons">
        <button className="edit-btn" onClick={handleEditClick}>Edit</button>
        <button className="delete-btn" onClick={handleDeleteClick}>Delete</button>
      </div>
      {/* Render the ClinicRegistration form with the clinic data */}
      <ClinicForm
        clinic={clinic}
        disableContact={true} // Optionally disable the contact number field for edit page
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default ClinicDetailPage;
