import React, { useEffect, useState } from 'react';
import './PatientMitraPage.css';
import PatientMitraForm from '../../components/patientmitra/PatientMitraForm';
import PatientMitraTable from '../../components/patientMitraTable/PatientMitraTable';
import { setLoading } from '../../redux/features/loading/loadingSlice';
import { useDispatch } from 'react-redux';

import { triggerToast } from '../../components/toast/ToastMessage';
import { hitGetPatientMitraList, CreatePatientMitra } from '../../redux/features/patientMitra/PatientMitraApiCall';

const PatientMitraPage = () => {
  const [formVisible, setFormVisible] = useState(false); // Initially, the form is hidden
  const [patientMitras, setPatientMitras] = useState([]); // State for the list of registered Patient Mitras
  const dispatch = useDispatch();

  // Handle the "Add New Patient Mitra" button click
  const handleAddPatientMitraClick = () => {
    setFormVisible(true); // Show the form
  };

  // Fetch list of Patient Mitras
  const fetchPatientMitrasList = async () => {
    dispatch(setLoading(true));
    try {
      const response = await hitGetPatientMitraList();
      console.log("response======", response);
      dispatch(setLoading(false));
      setPatientMitras(response?.data);
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchPatientMitrasList();
  }, []);

  const handleFormSubmit = (formData) => {
    console.log("======handleFormSubmit===",formData)
    dispatch(setLoading(true));
    try {
      console.log("formData====", formData);
      CreatePatientMitra(formData)
        .then((response) => {
          fetchPatientMitrasList();
          console.log("====response=====", response);
          triggerToast(response?.message);
          dispatch(setLoading(false));
          if (response?.status == 'success') {
            setFormVisible(false); // Hide form on success
          }

        })
        .catch((error) => {
          dispatch(setLoading(false));
          console.error("Error in patient mitra creation:", error);
        });
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  // Handle the "Cancel" button inside the form
  const handleCancel = () => {
    setFormVisible(false); // Hide form on cancel
  };

  return (
    <div>
      <button onClick={handleAddPatientMitraClick} className="add-doctor-button">
        Add New PatientMitra
      </button>

      {formVisible && (
        <PatientMitraForm
          onFormSubmit={handleFormSubmit}
          onCancel={handleCancel} // Pass cancel handler to the form
        />
      )}

      <PatientMitraTable patientMitras={patientMitras} /> {/* Render the table to display the list */}
    </div>
  );
};

export default PatientMitraPage;
