import React, { useState, useEffect } from "react";
import ApiCalls from "../../api/apiCalls"; // Import the API calls
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/features/loading/loadingSlice";
import './PatientList.css';
import GlobalLoader from '../../components/globalLoader/GlobalLoader';  // Add a global loader component
import doctor2 from '../../assets/img/doctors/doctor-thumb-02.jpg';  // Import the image

const PatientsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);  // Redux selector to get loading state
  const [patients, setPatients] = useState([]);
  
  // Fetch patients from the API
  const fetchPatients = async () => {
    dispatch(setLoading(true));  // Start loading
    try {
      console.log("Fetching patients...");  // Log the start of the API call
      const response = await ApiCalls.getPatients();  // Call the API to get patients
      console.log("API Response:", response);  // Log the full API response

      // Check if response contains patients data
      if (response && response.data && Array.isArray(response.data)) {
        console.log("Patients data:", response.data);  // Log the patients array
        setPatients(response.data);  // Store the patients in the state
      } else {
        console.log("No patients data found in response.");  // Log when no data is found
        alert("No patients data found");  // Handle the case when no data is returned
      }
    } catch (error) {
      console.error("Error fetching patients:", error);  // Log the error in case of failure
      alert("Error fetching patients");  // Display error alert
    } finally {
      dispatch(setLoading(false));  // Stop loading after fetching is complete
    }
  };

  useEffect(() => {
    fetchPatients();  // Fetch patients when the component mounts
  }, []);

  // Render loading spinner if data is being fetched
  if (isLoading) {
    return <GlobalLoader />;  // Show a loader while fetching
  }

  return (
    <div className="patientsList">
      <h3>Patients List</h3>
      <table>
        <thead>
          <tr>
            <th>P.ID</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {patients.length > 0 ? (
            patients.map((patient) => (
              <tr key={patient._id}>
                <td>{patient._id}</td>
                <td className="patient-info">
                  {/* Patient Image and Full Name */}
                  <img
                    src={doctor2}  // Image source
                    alt="Doctor"
                    className="patientImage"  // Class for styling the image
                  />
                  <span>{patient.fullName}</span>
                </td>
                <td>{patient.gender}</td>
                <td>{patient.contactNumber}</td>
                <td>{patient.emailAddress}</td>
                <td>{patient.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No patients available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsList;
