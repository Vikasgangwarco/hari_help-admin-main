import React, { useEffect, useState } from 'react';
import DoctorRegistration from '../../components/addNewDoctor/DoctorRegistration';
import DoctorsTable from '../../components/doctorTable/DoctorsTable';
import './DoctorsPage.css';
import { setLoading } from '../../redux/features/loading/loadingSlice';
import { useDispatch } from 'react-redux';
import ApiCalls from '../../api/apiCalls';
import { triggerToast } from '../../components/toast/ToastMessage';
import { hitGetDoctrosList } from '../../redux/features/doctors/doctorsApiCall';

const DoctorsPage = () => {
  const [formVisible, setFormVisible] = useState(false); // Initially, the form is hidden
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch()
  // Handle the "Add New Doctor" button click
  const handleAddDoctorClick = () => {
    setFormVisible(true); // Open the form every time the button is clicked
  };

  // Handle form submission
  const fetDoctorsList = async () => {
    dispatch(setLoading(true))
    try {
      let response = await hitGetDoctrosList()
      console.log("response======", response)
        dispatch(setLoading(false))
      setDoctors(response?.data)
      console.log()
    } catch (error) {
      console.log(error)
      dispatch(setLoading(false))
    }
  }
  useEffect(() => {
    fetDoctorsList()
  }, [])
  const handleFormSubmit = (formData) => {
    dispatch(setLoading(true))
    try {
      // console.log("formData====", formData)
      dispatch(setLoading(true));
      ApiCalls.createDoctor(formData)
        .then((response) => {
          fetDoctorsList()
          // console.log("====response=====", response)
          triggerToast(response?.message)
          dispatch(setLoading(false));

        })
        .catch((error) => {
          dispatch(setLoading(true));
          console.error("Error in doctor registration:", error); // Log the error
        });
      // setFormVisible(false);
    } catch (error) {
      console.log(error)
      dispatch(setLoading(false));

    }
  };

  // Handle the "Cancel" button inside the form
  const handleCancel = () => {
    setFormVisible(false); // Hide form on cancel
  };

  return (
    <div>
      <button onClick={handleAddDoctorClick} className="add-doctor-button">
        Add New Doctor
      </button>

      {formVisible && (
        <DoctorRegistration
          onFormSubmit={handleFormSubmit}
          onCancel={handleCancel} // Pass cancel handler to the form
        />
      )}

      <DoctorsTable doctors={doctors} />
    </div>
  );
};

export default DoctorsPage;
