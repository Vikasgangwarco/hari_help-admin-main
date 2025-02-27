import React, { useEffect, useState } from "react";
import "./PatientMitraForm.css"; // Assuming you have a separate CSS file
import { useDispatch } from "react-redux";

const PatientMitraForm = ({
  onCancel,
  patientMitra,
  isDisabled,
  onSaveBtnClick,
  disableContact,
  onFormSubmit,
}) => {
  // Define the initial form data state
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    contactNumber: "",
    emailAddress: "",
    nationality: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    streetAddressPermanent: "",
    cityPermanent: "",
    statePermanent: "",
    postalCodePermanent: "",
    countryPermanent: "",
    educationQualifications: "",
    languagesSpoken: "",
    previousExperience: "",
    dutyDays:[],
    dutyHours: "",
    communicationSkills: [''],
    technicalSkills: [''],
    preferredMode: "",
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    branchAddress: "",
    idProof: null,
    addressProof: null,
    qualificationCertificate: null,
    profilePhoto: null,
    characterCertificate: null,
    preferredModeOfAssistance: "",
    references: [
      { name: "", contact: "" },
      { name: "", contact: "" },
    ],
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (patientMitra) {
      setFormData({
        ...formData,
        fullName: patientMitra.fullName || "",
        gender: patientMitra.gender || "",
        dateOfBirth: patientMitra.dateOfBirth || "",
        contactNumber: patientMitra.contactNumber || "",
        emailAddress: patientMitra.emailAddress || "",
        nationality: patientMitra.nationality || "",
        streetAddress: patientMitra.streetAddress || "",
        city: patientMitra.city || "",
        state: patientMitra.state || "",
        postalCode: patientMitra.postalCode || "",
        country: patientMitra.country || "",
        streetAddressPermanent: patientMitra.streetAddressPermanent || "",
        cityPermanent: patientMitra.cityPermanent || "",
        statePermanent: patientMitra.statePermanent || "",
        postalCodePermanent: patientMitra.postalCodePermanent || "",
        countryPermanent: patientMitra.countryPermanent || "",
        educationQualifications: patientMitra.educationQualifications || "",
        languagesSpoken: patientMitra.languagesSpoken || "",
        previousExperience: patientMitra.previousExperience || "",
        dutyDays: patientMitra.dutyDays || [],
        dutyHours: patientMitra.dutyHours || "",
        communicationSkills: patientMitra.communicationSkills || [],
        technicalSkills: patientMitra.technicalSkills || [],
        preferredMode: patientMitra.preferredMode || "",
        bankName: patientMitra.bankName || "",
        accountHolderName: patientMitra.accountHolderName || "",
        accountNumber: patientMitra.accountNumber || "",
        ifscCode: patientMitra.ifscCode || "",
        branchAddress: patientMitra.branchAddress || "",
        idProof: patientMitra.idProof || '',
        addressProof: patientMitra.addressProof || null,
        qualificationCertificate: patientMitra.qualificationCertificate || null,
        profilePhoto: patientMitra.profilePhoto || null,
        characterCertificate: patientMitra.characterCertificate || null,
        preferredModeOfAssistance: patientMitra.preferredModeOfAssistance || "",
        references: patientMitra.references || [
          { name: "", contact: "" },
          { name: "", contact: "" },
        ],
      });
    }
  }, [patientMitra]);

  // Handle changes to the form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
    setFormData((prevFormData) => {
      const isSelected = prevFormData.dutyDays.includes(name);
      return {
        ...prevFormData,
        dutyDays: isSelected
          ? prevFormData.dutyDays.filter((d) => d !== name) // Remove the day
          : [...prevFormData.dutyDays, name], // Add the day
      };
    });
      if (name === "agreement") {
        setFormData({
          ...formData,
          [name]: checked, 
        });
      } 
    } else if (type === "file") {
      const file = e.target.files[0];
      if (file) {
        // Handle file input
        const filePath = URL.createObjectURL(file);
        setFormData({
          ...formData,
          [name]: filePath,
        });
      } else {
        setFormData({
          ...formData,
          [name]: null,
        });
      }
    } else {
      // For communicationSkills, technicalSkills, and other fields
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    console.log("========handleChange===",formData)
  };
  

  // Form validation function
  const validateForm = () => {
    let formErrors = {};
  
    // Required fields validation
    if (!formData.fullName) formErrors.fullName = "Full Name is required";
    if (!formData.contactNumber) formErrors.contactNumber = "Contact Number is required";
    if (!formData.emailAddress) formErrors.emailAddress = "Email Address is required";
    if (!formData.gender) formErrors.gender = "Gender is required";  // Added gender validation
    if (!formData.streetAddress) formErrors.streetAddress = "Street Address is required";
    if (!formData.city) formErrors.city = "City is required";
    if (!formData.state) formErrors.state = "State is required";
    if (!formData.postalCode) formErrors.postalCode = "Postal Code is required";
    if (!formData.country) formErrors.country = "Country is required";
    if (!formData.dutyHours) formErrors.dutyHours = "Duty Hours are required"; // Added dutyHours validation
    
    // Validation for communicationSkills and technicalSkills (both should be non-empty strings now)
    if (!formData.communicationSkills) formErrors.communicationSkills = "Communication Skills are required";  
    if (!formData.technicalSkills) formErrors.technicalSkills = "Technical Skills are required"; 
  
    // Email validation (simple regex for format check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.emailAddress && !emailRegex.test(formData.emailAddress)) {
      formErrors.emailAddress = "Please enter a valid email address";
    }
  
    // Phone number validation (basic example with length check)
    const phoneRegex = /^[0-9]{10}$/;
    if (formData.contactNumber && !phoneRegex.test(formData.contactNumber)) {
      formErrors.contactNumber = "Please enter a valid 10-digit phone number";
    }
  
    // Availability days validation
    if (!Object.values(formData.dutyDays).length==0) {
      formErrors.dutyDays = "Please select at least one availability day";
    }
  
    // Document upload validation
    if (!formData.append('idProof',idProof)) formErrors.idProof = "ID Proof is required";
  
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // If no errors, return true
  };
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onFormSubmit(formData)
    if (validateForm()) {
     
    }
  };

  const handleCancel = () => {
    onCancel(); // Call the parent cancel function if needed
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Patient Mitra Registration</h1>

      {/* Personal Information Section */}
      <fieldset>
        <legend>Personal Information</legend>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            disabled={isDisabled}
          />
          {errors.fullName && <div className="error">{errors.fullName}</div>}
        </label>

        <label>
  Gender:
  <select
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    disabled={isDisabled}
  >
    <option value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
  </select>
  {errors.gender && <div className="error">{errors.gender}</div>}
</label>


        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            disabled={disableContact || isDisabled}
          />
          {errors.contactNumber && <div className="error">{errors.contactNumber}</div>}
        </label>

        <label>
          Email Address:
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            disabled={isDisabled}
          />
          {errors.emailAddress && <div className="error">{errors.emailAddress}</div>}
        </label>

        <label>
          Nationality:
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>
      </fieldset>

      {/* Current Address Section */}
      <fieldset>
        <legend>Current Address</legend>
        <label>
          Street Address:
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            disabled={isDisabled}
          />
          {errors.streetAddress && <div className="error">{errors.streetAddress}</div>}
        </label>

        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            disabled={isDisabled}
          />
          {errors.city && <div className="error">{errors.city}</div>}
        </label>

        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            disabled={isDisabled}
          />
          {errors.state && <div className="error">{errors.state}</div>}
        </label>

        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            disabled={isDisabled}
          />
          {errors.postalCode && <div className="error">{errors.postalCode}</div>}
        </label>

        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            disabled={isDisabled}
          />
          {errors.country && <div className="error">{errors.country}</div>}
        </label>
      </fieldset>

      {/* Permanent Address Section */}
      <fieldset>
        <legend>Permanent Address</legend>
        <label>
          Street Address:
          <input
            type="text"
            name="streetAddressPermanent"
            value={formData.streetAddressPermanent}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          City:
          <input
            type="text"
            name="cityPermanent"
            value={formData.cityPermanent}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          State:
          <input
            type="text"
            name="statePermanent"
            value={formData.statePermanent}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          Postal Code:
          <input
            type="text"
            name="postalCodePermanent"
            value={formData.postalCodePermanent}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          Country:
          <input
            type="text"
            name="countryPermanent"
            value={formData.countryPermanent}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>
      </fieldset>

      {/* Skills and Experience Section */}
      <fieldset>
        <legend>Professional Information</legend>
        <label>
          Education/Qualifications:
          <input
            type="text"
            name="educationQualifications"
            value={formData.educationQualifications}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          Languages Spoken:
          <input
            type="text"
            name="languagesSpoken"
            value={formData.languagesSpoken}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          Previous Experience in Healthcare or Patient Support:
          <input
            type="text"
            name="previousExperience"
            value={formData.previousExperience}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        {/* Availability Days */}
        <label>
          Availability (Days):
          <div>
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <div key={day} className="checkbox-container">
                <input
                  type="checkbox"
                  name={day}
                  checked={formData.dutyDays.includes(day)}
                  onChange={handleChange}
                  disabled={isDisabled}
                />
                <label className="checkbox-label">
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </label>

        <label>
          Hours (e.g., 9:00 AM - 5:00 PM):
          <input
            type="text"
            name="dutyHours"
            value={formData.dutyHours}
            onChange={handleChange}
            disabled={isDisabled}
          />
          {errors.dutyHours && <div className="error">{errors.dutyHours}</div>}
        </label>

        <label>
  Communication Skills:
  <select
    name="communicationSkills"
    value={formData.communicationSkills}
    onChange={handleChange}
    disabled={isDisabled}
  >
    <option value="Excellent">Excellent</option>
    <option value="Good">Good</option>
    <option value="Average">Average</option>
  </select>
  {errors.communicationSkills && <div className="error">{errors.communicationSkills}</div>}
</label>



<label>
  Technical Skills:
  <select
    name="technicalSkills"
    value={formData.technicalSkills}
    onChange={handleChange}
    disabled={isDisabled}
  >
    <option value="Excellent">Excellent</option>
    <option value="Good">Good</option>
    <option value="Average">Average</option>
  </select>
  {errors.technicalSkills && <div className="error">{errors.technicalSkills}</div>}
</label>

<label>
  Preferred Mode of Assistance:
  <select
    name="preferredModeOfAssistance"
    value={formData.preferredModeOfAssistance}
    onChange={handleChange}
    disabled={isDisabled}
  >
    <option value="In-person">In-person</option>
    <option value="Telephonic">Telephonic</option>
    <option value="Online">Online</option> {/* Example of other valid modes */}
  </select>
  {errors.preferredModeOfAssistance && <div className="error">{errors.preferredModeOfAssistance}</div>}
</label>

      </fieldset>

      {/* Bank Information Section */}
      <fieldset>
        <legend>Bank Information</legend>
        <label>
          Bank Name:
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          Account Holder's Name:
          <input
            type="text"
            name="accountHolderName"
            value={formData.accountHolderName}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          Account Number:
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          IFSC Code:
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          Branch Address:
          <input
            type="text"
            name="branchAddress"
            value={formData.branchAddress}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>
      </fieldset>

      {/* Document Upload Section */}
      {/* File Upload Section */}
      <fieldset>
        <legend>Document Upload</legend>
        <label>
          ID Proof:
          <input
            type="file"
            name="idProof"
            onChange={handleChange}
            disabled={isDisabled}
          />
          {errors.idProof && <div className="error">{errors.idProof}</div>}
        </label>

        <label>
          Address Proof:
          <input
            type="file"
            name="addressProof"
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          Qualification Certificate:
          <input
            type="file"
            name="qualificationCertificate"
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          Profile Photo:
          <input
            type="file"
            name="profilePhoto"
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          Character Certificate:
          <input
            type="file"
            name="characterCertificate"
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>
      </fieldset>

      {/* References Section */}
      <fieldset>
        <legend>References</legend>
        <label>
          Reference 1:
          <input
            type="text"
            name="references[0].name"
            placeholder="Name"
            value={formData.references[0].name}
            onChange={handleChange}
            disabled={isDisabled}
          />
          <input
            type="text"
            name="references[0].contact"
            placeholder="Contact"
            value={formData.references[0].contact}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>

        <label>
          Reference 2:
          <input
            type="text"
            name="references[1].name"
            placeholder="Name"
            value={formData.references[1].name}
            onChange={handleChange}
            disabled={isDisabled}
          />
          <input
            type="text"
            name="references[1].contact"
            placeholder="Contact"
            value={formData.references[1].contact}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </label>
      </fieldset>

      <div className="form-actions">
      <button type="submit" disabled={isDisabled}>
          Submit
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
       
      </div>
    </form>
  );
};

export default PatientMitraForm;
