import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import {
  hitPatientMitraDelete,
  hitEditPatientMitra,
  hitGetSinglePatientMitra
} from "../../redux/features/patientMitra/PatientMitraApiCall";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/features/loading/loadingSlice";
import { triggerToast } from "../../components/toast/ToastMessage";

import PatientMitraForm from "../../components/patientmitra/PatientMitraForm";

const PatientMitraDetailPage = () => {
  const { patientmitraId } = useParams();
  console.log("====patientmitraId====",patientmitraId)
  const [patientmitra, setPatientMitra] = useState(null);
   const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getSinglePatientMitraData = async () => {
    dispatch(setLoading(true));
    try {
      let response = await   hitGetSinglePatientMitra(patientmitraId);
      if (response?.status === "success") {
        setPatientMitra(response?.data);
        console.log("===========", response);
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getSinglePatientMitraData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true)
    navigate(`/patientmitra/patientmitra_edit/${patientmitraId}`);
  };

  const handleDeleteClick = async () => {
    try {
      let response = await hitPatientMitraDelete(patientmitraId, {});
      console.log(response);
      triggerToast(response?.message);
      if (response?.status === "success") {
        navigate("/patientmitra");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleFormSubmit = async (formData) => {
    try {
      const dataToUpdate = {
        ...formData,
      };
      delete dataToUpdate.contactNumber;
      let response = await hitEditPatientMitra(patientmitraId, dataToUpdate);
      console.log("formData========1111111111", dataToUpdate);
      triggerToast(response?.message);
      if (response?.status === "success") {
        navigate("/patientmitra");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="patient-mitra-detail-page">
      <div className="action-buttons">
        <button className="edit-btn" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete-btn" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
      <PatientMitraForm
        patientMitra={patientmitra}
        disableContact={true}
        isDisabled={!isEditing}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default PatientMitraDetailPage;
