import React, { useEffect, useState } from 'react'
import DoctorRegistration from '../../components/addNewDoctor/DoctorRegistration'
import { useNavigate, useParams } from 'react-router-dom';
import { hitDoctorDelete, hitEditDoctros, hitGetSingleDoctros } from '../../redux/features/doctors/doctorsApiCall';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/features/loading/loadingSlice';
import { triggerToast } from '../../components/toast/ToastMessage';
import './DoctorDetailPage.css';  // Import the specific CSS file

const DoctorDetailPage = () => {
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState(null)
    const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const getSingleDoctorData = async () => {
        dispatch(setLoading(true))
        try {
            let response = await hitGetSingleDoctros(doctorId)
            if (response?.status === 'success') {
                setDoctor(response?.data)
                // console.log("getSingleDoctorData====", response)
            }
            dispatch(setLoading(false))
        } catch (error) {
            console.log(error)
            dispatch(setLoading(false))
        }
    }

    useEffect(() => {
        getSingleDoctorData()
    }, [])

    const handleEditClick = () => {
        console.log(`/doctor/doctor_edit/${doctorId}`)
        navigate(`/doctor/doctor_edit/${doctorId}`);
    }

    const handleDeleteClick = async () => {
        try {
            let response = await hitDoctorDelete(doctorId, {})
            console.log(response)
            triggerToast(response?.message)
            if (response?.status === 'success') {
                navigate("/doctors");
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleFormSubmit = async (formData) => {
        try {
            const dataToUpdate = {
                ...formData,
            };
            delete dataToUpdate.contactNumber;
            let response = await hitEditDoctros(doctorId, dataToUpdate)
            console.log("formData========", dataToUpdate)
            triggerToast(response?.message)
            if (response?.status === 'success') {
                navigate("/doctors");
            }
            console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="doctor-detail-page">
            <div className="action-buttons">
                <button className="edit-btn" onClick={handleEditClick}>Edit</button>
                <button className="delete-btn" onClick={handleDeleteClick}>Delete</button>
            </div>
            <DoctorRegistration
                doctor={doctor}
                disableContact={true}
                onFormSubmit={handleFormSubmit}
                isDisabled={!isEditing}

            />
        </div>
    )
}

export default DoctorDetailPage
