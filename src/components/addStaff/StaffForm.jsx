import React, { useState } from 'react';
import './StaffForm.css';

const StaffForm = ({ onFormSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    jobTitle: '',
    department: '',
    contactNumber: '',
    email: '',
    qualifications: '',
    specialization: '',
    yearsOfExperience: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    staffAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    idProof: '', // For uploading ID Proof
    resume: '', // For uploading Resume
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file input changes
  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0], // Only keeping the first file uploaded
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formData); // Pass form data to parent component
    setFormData({
      fullName: '',
      dob: '',
      gender: '',
      jobTitle: '',
      department: '',
      contactNumber: '',
      email: '',
      qualifications: '',
      specialization: '',
      yearsOfExperience: '',
      emergencyContactName: '',
      emergencyContactNumber: '',
      staffAddress: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      idProof: '',
      resume: '',
    }); // Reset form data after submission
  };

  // Handle form cancel
  const handleCancel = () => {
    onCancel();
    setFormData({
      fullName: '',
      dob: '',
      gender: '',
      jobTitle: '',
      department: '',
      contactNumber: '',
      email: '',
      qualifications: '',
      specialization: '',
      yearsOfExperience: '',
      emergencyContactName: '',
      emergencyContactNumber: '',
      staffAddress: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      idProof: '',
      resume: '',
    }); // Optionally reset form on cancel
  };

  return (
    <div className="form-container">
      <h1>Staff Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="qualifications">Qualifications</label>
          <input
            type="text"
            id="qualifications"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="specialization">Specialization</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="yearsOfExperience">Years of Experience</label>
          <input
            type="number"
            id="yearsOfExperience"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="emergencyContactName">Emergency Contact Name</label>
          <input
            type="text"
            id="emergencyContactName"
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="emergencyContactNumber">Emergency Contact Number</label>
          <input
            type="tel"
            id="emergencyContactNumber"
            name="emergencyContactNumber"
            value={formData.emergencyContactNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="staffAddress">Staff Address</label>
          <input
            type="text"
            id="staffAddress"
            name="staffAddress"
            value={formData.staffAddress}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="idProof">ID Proof (Upload File)</label>
          <input
            type="file"
            id="idProof"
            name="idProof"
            onChange={handleFileChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="resume">Resume (Upload File)</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
          />
        </div>

        <div className="button-container">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default StaffForm;
