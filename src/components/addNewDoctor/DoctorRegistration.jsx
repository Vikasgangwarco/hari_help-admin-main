import React, { useState, useEffect } from "react";
import "./DoctorRegistration.css";
import ApiCalls from "../../api/apiCalls"; // Import the API calls module

import { useDispatch } from "react-redux";


const DoctorRegistration = ({ onCancel, doctor, isDisabled, onSaveBtnClick, disableContact,onFormSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    contactNumber: "",
    alternateNumber: "",
    email: "",
    nationality: "",
    medicalRegistrationNumber: "",
    specialization: "",
    qualifications: "",
    yearsOfExperience: "",
    currentHospital: "",
    consultationFee: "",
    currentHospitalClinicName: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    consultationMode: "",
    consultationTimings: "",
    medicalLicense: '',
    photoID: null,
    profilePhoto: null,
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    branchAddress: "",
    terms: false,
    Previous_OPD_Number: "", // Add default value for Previous_OPD_Number
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoadingState] = useState(false); // Loading state to handle API call loading
  const dispatch = useDispatch();

  // If doctor data is provided, populate the form fields with it
  useEffect(() => {
    if (doctor) {
      setFormData({
        ...formData,
        fullName: doctor.fullName || "",
        gender: doctor.gender || "",
        dateOfBirth: doctor.dateOfBirth || "",
        contactNumber: doctor.contactNumber || "",
       // alternateNumber: doctor.alternateNumber || "",
        email: doctor.email || "",
        nationality: doctor.nationality || "",
        medicalRegistrationNumber: doctor.medicalRegistrationNumber || "",
        specialization: doctor.specialization || "",
        qualifications: doctor.qualifications || "",
        yearsOfExperience: doctor.yearsOfExperience || "",
       // currentHospital: doctor.currentHospital || "",
        //consultationFee: doctor.consultationFee || "",
        currentHospitalClinicName: doctor.currentHospitalClinicName || "",
        streetAddress: doctor.streetAddress || "",
        city: doctor.city || "",
        state: doctor.state || "",
        postalCode: doctor.postalCode || "",
        country: doctor.country || "",
        //consultationMode: doctor.consultationMode || "",
       // consultationTimings: doctor.consultationTimings || "",
       // medicalLicense: doctor.medicalLicense || null,
      //  photoID: doctor.photoID || null,
        //profilePhoto: doctor.profilePhoto || null,
       // bankName: doctor.bankName || "",
        //accountHolderName: doctor.accountHolderName || "",
        //accountNumber: doctor.accountNumber || "",
        //ifscCode: doctor.ifscCode || "",
       //branchAddress: doctor.branchAddress || "",
        //terms: doctor.terms || false,
      //  Previous_OPD_Number: doctor.Previous_OPD_Number || "",
      });
    }
    // console.log("formData==========",formData)
  }, [doctor]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }

  };

  const handleFileChange = (e) => {
   
    // const { name, files } = e.target;
    //  console.log("=======handleFileChange=====",name,files)
    // setFormData({ ...formData, [name]: files[0] });
    // console.log(`File changed for ${name}:`, files[0]);
     const selectedFile = e.target.files[0]; // Get the first selected file
        if (selectedFile) {
            // setFile(selectedFile);
            const tempURL = URL.createObjectURL(selectedFile); // Generate a temporary URL
            console.log("====",tempURL)
            // setFileURL(tempURL);
        }
  };


  const validateForm = () => {
 
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = "Full Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.contactNumber) formErrors.contactNumber = "Contact Number is required";
    if (!formData.gender) formErrors.gender = "Gender is required";
    if (!formData.dateOfBirth) formErrors.dateOfBirth = "Date of Birth is required";
    if (!formData.nationality) formErrors.nationality = "Nationality is required";
    if (!formData.specialization) formErrors.specialization = "Specialization is required";
    if (!formData.medicalRegistrationNumber) formErrors.medicalRegistrationNumber = "Medical Registration Number is required";
    if (!formData.currentHospitalClinicName) formErrors.currentHospitalClinicName = "Clinic Name is required";
    if (!formData.streetAddress) formErrors.streetAddress = "Street Address is required";
    if (!formData.city) formErrors.city = "City is required";
    if (!formData.state) formErrors.state = "State is required";
    if (!formData.postalCode) formErrors.postalCode = "Postal Code is required";
    if (!formData.country) formErrors.country = "Country is required";
    if (!formData.consultationMode) formErrors.consultationMode = "Consultation Mode is required";
    if (!formData.consultationTimings) formErrors.consultationTimings = "Consultation Timings are required";
    if (!formData.medicalLicense) formErrors.medicalLicense = "Medical License is required";
    if (!formData.photoID) formErrors.photoID = "Photo ID is required";
    if (!formData.profilePhoto) formErrors.profilePhoto = "Profile Photo is required";
    if (!formData.bankName) formErrors.bankName = "Bank Name is required";
    if (!formData.accountHolderName) formErrors.accountHolderName = "Account Holder's Name is required";
    if (!formData.accountNumber) formErrors.accountNumber = "Account Number is required";
    if (!formData.ifscCode) formErrors.ifscCode = "IFSC Code is required";
    if (!formData.branchAddress) formErrors.branchAddress = "Branch Address is required";
    // if (!formData.terms) formErrors.terms = "You must agree to the Terms and Conditions";
    // if (!formData.Previous_OPD_Number) formErrors.Previous_OPD_Number = "Previous OPD Number is required";

    setErrors(formErrors);
    console.log("Validation Errors:", formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData)
    if (validateForm()) {
     
    }
  };

  const handleCancel = () => {
    setFormVisible(false);
    onCancel(); // Call the parent cancel function if needed
  };

  return (
    <div className="doctor-registration-container">
      <form className="doctor-form" onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="form-category">
          <h3 className="form-category-header">Personal Information</h3>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <span className="error-text">{errors.gender}</span>}
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
            {errors.dateOfBirth && <span className="error-text">{errors.dateOfBirth}</span>}
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              disabled={disableContact}
            />
            {errors.contactNumber && <span className="error-text">{errors.contactNumber}</span>}
          </div>
          <div className="form-group">
            <label>Alternate Number</label>
            <input type="text" name="alternateNumber" value={formData.alternateNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Nationality</label>
            <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
            {errors.nationality && <span className="error-text">{errors.nationality}</span>}
          </div>
        </div>

        {/* Medical Information */}
        <div className="form-category">
          <h3 className="form-category-header">Medical Information</h3>
          <div className="form-group">
            <label>Medical Registration Number</label>
            <input
              type="text"
              name="medicalRegistrationNumber"
              value={formData.medicalRegistrationNumber}
              onChange={handleChange}
            />
            {errors.medicalRegistrationNumber && <span className="error-text">{errors.medicalRegistrationNumber}</span>}
          </div>
          <div className="form-group">
            <label>Specialization</label>
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
            />
            {errors.specialization && <span className="error-text">{errors.specialization}</span>}
          </div>
          <div className="form-group">
            <label>Years of Experience</label>
            <input
              type="number"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Current Hospital</label>
            <input
              type="text"
              name="currentHospital"
              value={formData.currentHospital}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Consultation Fee</label>
            <input
              type="number"
              name="consultationFee"
              value={formData.consultationFee}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Bank Details */}
        <div className="form-category">
          <h3 className="form-category-header">Bank Details</h3>
          <div className="form-group">
            <label>Bank Name</label>
            <input type="text" name="bankName" value={formData.bankName} onChange={handleChange} />
            {errors.bankName && <span className="error-text">{errors.bankName}</span>}
          </div>
          <div className="form-group">
            <label>Account Holder Name</label>
            <input type="text" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} />
            {errors.accountHolderName && <span className="error-text">{errors.accountHolderName}</span>}
          </div>
          <div className="form-group">
            <label>Account Number</label>
            <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} />
            {errors.accountNumber && <span className="error-text">{errors.accountNumber}</span>}
          </div>
          <div className="form-group">
            <label>IFSC Code</label>
            <input type="text" name="ifscCode" value={formData.ifscCode} onChange={handleChange} />
            {errors.ifscCode && <span className="error-text">{errors.ifscCode}</span>}
          </div>
          <div className="form-group">
            <label>Branch Address</label>
            <input type="text" name="branchAddress" value={formData.branchAddress} onChange={handleChange} />
            {errors.branchAddress && <span className="error-text">{errors.branchAddress}</span>}
          </div>
        </div>

        {/* Address */}
        <div className="form-category">
          <h3 className="form-category-header">Address</h3>
          <div className="form-group">
            <label>Clinic Name</label>
            <input type="text" name="currentHospitalClinicName" value={formData.currentHospitalClinicName} onChange={handleChange} />
            {errors.currentHospitalClinicName && <span className="error-text">{errors.currentHospitalClinicName}</span>}
          </div>
          <div className="form-group">
            <label>Street Address</label>
            <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} />
            {errors.streetAddress && <span className="error-text">{errors.streetAddress}</span>}
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
            {errors.city && <span className="error-text">{errors.city}</span>}
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} />
            {errors.state && <span className="error-text">{errors.state}</span>}
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
            {errors.postalCode && <span className="error-text">{errors.postalCode}</span>}
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} />
            {errors.country && <span className="error-text">{errors.country}</span>}
          </div>
        </div>

        {/* Consultation Details */}
        <div className="form-category">
          <h3 className="form-category-header">Consultation Details</h3>
          <div className="form-group">
            <label>Consultation Mode</label>
            <input type="text" name="consultationMode" value={formData.consultationMode} onChange={handleChange} />
            {errors.consultationMode && <span className="error-text">{errors.consultationMode}</span>}
          </div>
          <div className="form-group">
            <label>Consultation Timings</label>
            <input
              type="text"
              name="consultationTimings"
              value={formData.consultationTimings}
              onChange={handleChange}
            />
            {errors.consultationTimings && <span className="error-text">{errors.consultationTimings}</span>}
          </div>
        </div>

        {/* Upload Documents */}
        <div className="form-category">
          <h3 className="form-category-header">Upload Documents</h3>
          <div className="form-group">
            <label>Medical License</label>
            <input type="file" name="medicalLicense" onChange={handleFileChange} />
            {errors.medicalLicense && <span className="error-text">{errors.medicalLicense}</span>}
          </div>
          <div className="form-group">
            <label>Photo ID</label>
            <input type="file" name="photoID" onChange={handleFileChange} />
            {errors.photoID && <span className="error-text">{errors.photoID}</span>}
          </div>
          <div className="form-group">
            <label>Profile Photo</label>
            <input type="file" name="profilePhoto" onChange={handleFileChange} />
            {errors.profilePhoto && <span className="error-text">{errors.profilePhoto}</span>}
          </div>
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="form-buttons">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
    
      </form>
    </div>
  );
};
// Default props for the onSaveBtnClick function
DoctorRegistration.defaultProps = {
  onSaveBtnClick: () => {}, // Default to an empty function if not provided
};
export default DoctorRegistration;
