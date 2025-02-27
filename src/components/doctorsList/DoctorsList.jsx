import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/features/loading/loadingSlice'; // Adjust the import path
import { hitGetDoctrosList } from '../../redux/features/doctors/doctorsApiCall'; // Adjust the import path
import './DoctorsList.css';
import doctor1 from '../../assets/img/doctors/doctor-thumb-01.jpg';


const DoctorsList = () => {
  const dispatch = useDispatch();
  const [doctors, setDoctors] = useState([]);

  // Fetch the list of doctors
  const fetchDoctorsList = async () => {
    dispatch(setLoading(true));  // Show loading indicator
    try {
      const response = await hitGetDoctrosList();  // Call the API
      console.log('Doctors response:', response);  // Log the entire response to the console

      if (response && response.data) {
        console.log('Doctors data:', response.data);  // Log the doctors data specifically
        setDoctors(response.data || []);  // Assuming response.data contains the list of doctors
      } else {
        console.warn('No data found in the response');
      }
      
      dispatch(setLoading(false));  // Hide loading indicator
    } catch (error) {
      console.error('Error fetching doctors list:', error);  // Handle errors
      dispatch(setLoading(false));  // Hide loading indicator in case of error
    }
  };

  useEffect(() => {
    fetchDoctorsList();  // Fetch doctors when the component mounts
  }, []);

  return (
    <div className="doctorsList">
      <h3>Doctors List</h3>
      <table>
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>Doctor Name</th>
            <th>Speciality</th>
            <th>M.R. Number</th>
            <th>Years of Exp.</th>
            <th>Phone</th>
            {/* <th>Hospital/Clinic Name</th> */}
          </tr>
        </thead>
        <tbody>
          {doctors.length > 0 ? (
            doctors.map((doctor, index) => (
              <tr key={doctor.id || index}>  {/* Use doctor.id or fallback to index */}
                <td>{doctor._id}</td>
                <td className="doctor-info">
                  <img src={doctor.image || doctor1} alt={doctor.name} className="doctorImage" />
                  <span>{doctor.fullName}</span>
                </td>
                <td>{doctor.specialization}</td>
                <td>{doctor.medicalRegistrationNumber}</td>
                <td>{doctor.yearsOfExperience}</td>
                <td>{doctor.contactNumber}</td>
                {/* <td>{doctor.currentHospitalClinicName}</td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>No doctors found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsList;
