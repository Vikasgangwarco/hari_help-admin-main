import React, { useState, useEffect } from "react";
import "./AddNewPatient.css";
import ApiCalls from "../../api/apiCalls"; // Import your API calls module
import GlobalLoader from "../globalLoader/GlobalLoader";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/features/loading/loadingSlice";

const AddNewPatient = ({
  onAddPatient,
  onCancel,
  patient,
  isDisabled,
  onSaveBtnClick,
  disableContact,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    contactNumber: "", // Initially empty, will be disabled
    emailAddress: "",
    nationality: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    bloodGroup: "",
    allergies: [], // Array for allergies
    chronicConditions: [], // Array for chronic conditions
    currentMedications: [], // Array for medications
    medicalHistory: [], // Array for medical history
    emergencyContactName: "",
    emergencyContactNumber: "",
    preferredConsultationMode: "In-person", // Default value for consultation mode
    patient_picture: "", // Image URL state
    patientId: "", // Adding Patient ID to formData
    insuranceProvider: "",
    insuranceIdPolicyNumber: "",
  });
  let loading;
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(null); // To handle error state

  // Pre-fill the form with the selected patient data if it's passed as a prop (for More view)
  useEffect(() => {
    if (patient) {
      setFormData({
        fullName: patient.fullName || "",
        gender: patient.gender || "",
        dateOfBirth: patient.dateOfBirth || "",
        contactNumber: patient.contactNumber || "", // Retain existing contact number value
        emailAddress: patient.emailAddress || "",
        nationality: patient.nationality || "",
        streetAddress: patient.streetAddress || "",
        city: patient.city || "",
        state: patient.state || "",
        postalCode: patient.postalCode || "",
        country: patient.country || "",
        bloodGroup: patient.bloodGroup || "",
        allergies: patient.allergies || [], // Make sure this is an array
        chronicConditions: patient.chronicConditions || [], // Make sure this is an array
        currentMedications: patient.currentMedications || [], // Make sure this is an array
        medicalHistory: patient.medicalHistory || [], // Make sure this is an array
        emergencyContactName: patient.emergencyContactName || "",
        emergencyContactNumber: patient.emergencyContactNumber || "",
        preferredConsultationMode:
          patient.preferredConsultationMode || "In-person",
        patient_picture: patient.patient_picture || "", // Ensure this is passed correctly
        patientId: patient.patientId || "", // If patient already exists, use the Patient ID
        insuranceProvider: patient.insuranceProvider || "",
        insuranceIdPolicyNumber: patient.insuranceIdPolicyNumber || "",
      });
    }
  }, [patient]);

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (
      name === "allergies" ||
      name === "chronicConditions" ||
      name === "currentMedications" ||
      name === "medicalHistory"
    ) {
      // Handle multiple values (comma-separated) for allergies, chronicConditions, and currentMedications
      setFormData((prev) => ({
        ...prev,
        [name]: value.split(",").map((item) => item.trim()), // Split by commas and trim extra spaces
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        patient_picture: URL.createObjectURL(file),
      }));
    }
  };

  // Check if contact number exists (for new patients)
  const checkPhoneNumberExists = async (contactNumber) => {
    try {
      const response = await ApiCalls.checkPhoneNumber(contactNumber);
      return response.exists;
    } catch (error) {
      console.error("Error checking phone number:", error);
      return false;
    }
  };

  // Handle form submission (with API call)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    dispatch(setLoading(true));
    setError(null); // Reset error message
    // Check if the contact number exists in the system (only for new patients)
    if (!patient) {
      const phoneExists = await checkPhoneNumberExists(formData.contactNumber);
      if (phoneExists) {
        setError("Patient with this phone number already exists.");
        dispatch(setLoading(false));
        return;
      }
    }
    onSaveBtnClick(formData);
  };

  return (
    <div className="full-page-container">
      <GlobalLoader />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="patient-form">
          {/* Display error message */}
          {error && <div className="error-message">{error}</div>}

          {/* Personal Information Section */}
          <div className="section">
            <h3>Personal Information</h3>
            <div className="two-column">
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                  required
                />
              </label>

              <label>
                Gender:
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>

            <div className="two-column">
              <label>
                Date of Birth:
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                  required
                />
              </label>

              <label>
                Contact Number:
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  disabled={isDisabled || disableContact} // Always disable contact number field
                  required
                />
              </label>
            </div>

            <div className="two-column">
              <label>
                Email Address:
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                  required
                />
              </label>

              <label>
                Nationality:
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                />
              </label>
            </div>
          </div>

          {/* Address Section */}
          <div className="section">
            <h3>Address</h3>
            <div className="two-column">
              <label>
                Street Address:
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                  required
                />
              </label>

              <label>
                City:
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                  required
                />
              </label>
            </div>

            <div className="two-column">
              <label>
                State:
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                  required
                />
              </label>

              <label>
                Postal Code:
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                  required
                />
              </label>
            </div>

            <label>
              Country:
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                disabled={isDisabled || loading}
                required
              />
            </label>
          </div>

          {/* Medical Information Section */}
          <div className="section">
            <h3>Medical Information</h3>
            <div className="two-column">
              <label>
                Blood Group:
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="O+">O+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="AB-">AB-</option>
                  <option value="O-">O-</option>
                </select>
              </label>

              <label>
                Allergies (if any):
                <input
                  type="text"
                  name="allergies"
                  value={formData.allergies.join(", ")} // Show as comma-separated list
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                />
              </label>
            </div>

            <div className="two-column">
              <label>
                Chronic Conditions:
                <input
                  type="text"
                  name="chronicConditions"
                  value={formData.chronicConditions.join(", ")} // Show as comma-separated list
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                />
              </label>

              <label>
                Current Medications:
                <input
                  type="text"
                  name="currentMedications"
                  value={formData.currentMedications.join(", ")} // Show as comma-separated list
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                />
              </label>
            </div>

            <label>
              Medical History:
              <input
                type="text"
                name="medicalHistory"
                value={formData.medicalHistory.join(", ")} // Show as comma-separated list
                onChange={handleChange}
                disabled={isDisabled || loading}
              />
            </label>
          </div>

          {/* Emergency Contact Section */}
          <div className="section">
            <h3>Emergency Contact</h3>
            <div className="two-column">
              <label>
                Emergency Contact Name:
                <input
                  type="text"
                  name="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                />
              </label>

              <label>
                Emergency Contact Number:
                <input
                  type="tel"
                  name="emergencyContactNumber"
                  value={formData.emergencyContactNumber}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                />
              </label>
            </div>
          </div>

          {/* Health Insurance Section */}
          <div className="section">
            <h3>Health Insurance Information (Optional)</h3>
            <div className="insurance-group">
              <label>
                Insurance Provider:
                <input
                  type="text"
                  name="insuranceProvider"
                  value={formData.insuranceProvider}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                />
              </label>

              <label>
                Insurance ID/Policy Number:
                <input
                  type="text"
                  name="insuranceIdPolicyNumber"
                  value={formData.insuranceIdPolicyNumber}
                  onChange={handleChange}
                  disabled={isDisabled || loading}
                />
              </label>
            </div>
          </div>

          {/* Preferred Consultation Section - Dropdown */}
          <div className="section">
            <h3>Preferred Consultation Mode</h3>
            <label>
              Preferred Consultation Mode:
              <select
                name="preferredConsultationMode"
                value={formData.preferredConsultationMode}
                onChange={handleChange}
                disabled={isDisabled || loading}
                required
              >
                <option value="In-person">In-person</option>
                <option value="Online Consultation">Online Consultation</option>
                <option value="Telephonic Consultation">
                  Telephonic Consultation
                </option>
                <option value="Home Visit">Home Visit</option>
                <option value="All The Above">All The Above</option>
              </select>
            </label>
          </div>
          <label>
            Patient Picture:
            <input
              type="file"
              name="patient_picture"
              accept="image/*"
              onChange={handleImageChange}
              disabled={isDisabled || loading}
            />
          </label>

          {/* Submit Button */}
          <div className="form-footer">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={onCancel}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewPatient;
