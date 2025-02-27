import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';  // useNavigate import karein
import AddNewPatient from "../../components/addNewPatient/AddNewPatient";  // Existing AddNewPatient component ko import karein
import ApiCalls from "../../api/apiCalls";
import { setLoading } from "../../redux/features/loading/loadingSlice";
import './PatientPage.css';
import GlobalLoader from '../../components/globalLoader/GlobalLoader';
import { triggerToast } from '../../components/toast/ToastMessage';

const PatientPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();  // useNavigate hook
  const isLoading = useSelector((state) => state.loading.isLoading);
  const [showAddForm, setShowAddForm] = useState(false);
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const formatDateForInput = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatDateForDisplay = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
   const fetchPatients = async () => {
      dispatch(setLoading(true));
      try {
        const response = await ApiCalls.getPatients();
        if (response && response.data) {
          setPatients(response.data);
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

  useEffect(() => {
   fetchPatients()

  }, []);
  const onPatienSave = async (formData) => {
     try {
    // Ensure contact number remains the same during the update
    const { ...dataToSubmit } = formData;
      // if (patient) {
      //   // If updating, retain the original contact number
      //   dataToSubmit.contactNumber = patient.contactNumber;
      // }
      const response = await ApiCalls.createPatient(dataToSubmit); // Call API to create/update patient
      if (response && response.status === "success") {
        fetchPatients()
        alert("Patient added/updated successfully!");
           dispatch(setLoading(false));
           setShowAddForm(false)
       // onAddPatient(response.data); // Pass the created/updated patient data to parent
       // onCancel(); // Automatically close the form
      } else {
        dispatch(setLoading(false));
        alert("Error adding/updating patient: " + (response.message || "Unknown error"));
      }
    } catch (error) {
      dispatch(setLoading(false));
      console.error("Error creating/updating patient:", error);
      alert("An error occurred while adding/updating the patient.");
    } finally {
    dispatch(setLoading(false));
    
    }
  }
  // Handle "More" button click
  const handleMoreClick = (patientId) => {
    navigate(`/patient/${patientId}`); // Navigate to PatientDetailPage with patientId
  };
  return (
    <div className="patient-page">
      <div className="header-container">
        <button className="add-btn " onClick={() => setShowAddForm(true)}>
          Add New Patient
        </button>
      </div>
      {showAddForm && (
        <AddNewPatient
          onAddPatient={(newPatient) => {
            setPatients([...patients, newPatient]);
            setShowAddForm(false);

            // Close the form after adding the patient
          }}
          onSaveBtnClick={onPatienSave}
          onCancel={() => setShowAddForm(false)}  // Close the form when canceling
          isDisabled={false}  // You can set this dynamically
        />
      )}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>P.ID</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Phone</th>
              <th>Email</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient._id}>
                <td>{patient._id}</td>
                <td>{patient.fullName}</td>
                <td>{patient.gender}</td>
                <td>{patient.dateOfBirth}</td>
                <td>{patient.contactNumber}</td>
                <td>{patient.emailAddress}</td>
                <td>
                  <button className="more-btn" onClick={() => handleMoreClick(patient._id)}>
                    More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientPage;
