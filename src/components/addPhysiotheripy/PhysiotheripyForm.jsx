import React, { useState } from 'react';
import './PhysiotheripyForm.css';

const PhysiotheripyForm = () => {
  const [formData, setFormData] = useState({
    centreName: '',
    registrationNumber: '',
    dateOfEstablishment: '',
    centreType: '',
    contactNumber: '',
    emailAddress: '',
    website: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    specializations: '',
    availableServices: [],
    operatingDays: [],
    operatingHours: '',
    keyContactName: '',
    keyContactPosition: '',
    keyContactNumber: '',
    keyContactEmail: '',
    therapists: [
      {
        name: '',
        specialization: '',
        yearsOfExperience: '',
        consultationFee: '',
        availability: ''
      }
    ],
    bankInfo: {
      bankName: '',
      accountHolderName: '',
      accountNumber: '',
      ifscCode: '',
      branchAddress: ''
    },
    documents: {
      registrationCertificate: '',
      proofOfAddress: '',
      photoIdProof: '',
      centreExteriorPhoto: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here
  };

  return (
    <div className="centre-form-container">
      <form onSubmit={handleSubmit}>
        <h1>Centre Information</h1>
        
        <label>Centre Name:</label>
        <input type="text" name="centreName" value={formData.centreName} onChange={handleChange} />
        
        <label>Registration Number:</label>
        <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} />
        
        <label>Date of Establishment:</label>
        <input type="date" name="dateOfEstablishment" value={formData.dateOfEstablishment} onChange={handleChange} />
        
        <label>Centre Type:</label>
        <select name="centreType" value={formData.centreType} onChange={handleChange}>
          <option value="physiotherapy">Physiotherapy Clinic</option>
          <option value="rehabilitation">Rehabilitation Centre</option>
          <option value="wellness">Wellness Centre</option>
          <option value="other">Other</option>
        </select>

        <h2>Contact Information</h2>
        <label>Centre Contact Number:</label>
        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
        
        <label>Email Address:</label>
        <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
        
        <label>Website (if applicable):</label>
        <input type="url" name="website" value={formData.website} onChange={handleChange} />
        
        <h2>Centre Address</h2>
        <label>Street Address:</label>
        <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} />
        
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
        
        <label>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
        
        <label>Postal Code:</label>
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
        
        <label>Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} />

        <h2>Services Provided</h2>
        <label>Specializations:</label>
        <input type="text" name="specializations" value={formData.specializations} onChange={handleChange} />

        <label>Available Services:</label>
        <div className="services-checkboxes">
          <label>
            <input type="checkbox" name="availableServices" value="Manual Therapy" onChange={handleChange} /> Manual Therapy
          </label>
          <label>
            <input type="checkbox" name="availableServices" value="Electrotherapy" onChange={handleChange} /> Electrotherapy
          </label>
          <label>
            <input type="checkbox" name="availableServices" value="Exercise Therapy" onChange={handleChange} /> Exercise Therapy
          </label>
          <label>
            <input type="checkbox" name="availableServices" value="Pain Management" onChange={handleChange} /> Pain Management
          </label>
          <label>
            <input type="checkbox" name="availableServices" value="Post-Surgery Rehabilitation" onChange={handleChange} /> Post-Surgery Rehabilitation
          </label>
        </div>

        <h2>Centre Timings</h2>
        <label>Operating Days:</label>
        <div className="days-checkboxes">
          <label>
            <input type="checkbox" name="operatingDays" value="Monday" onChange={handleChange} /> Monday
          </label>
          <label>
            <input type="checkbox" name="operatingDays" value="Tuesday" onChange={handleChange} /> Tuesday
          </label>
          <label>
            <input type="checkbox" name="operatingDays" value="Wednesday" onChange={handleChange} /> Wednesday
          </label>
          <label>
            <input type="checkbox" name="operatingDays" value="Thursday" onChange={handleChange} /> Thursday
          </label>
          <label>
            <input type="checkbox" name="operatingDays" value="Friday" onChange={handleChange} /> Friday
          </label>
          <label>
            <input type="checkbox" name="operatingDays" value="Saturday" onChange={handleChange} /> Saturday
          </label>
          <label>
            <input type="checkbox" name="operatingDays" value="Sunday" onChange={handleChange} /> Sunday
          </label>
        </div>

        <label>Operating Hours:</label>
        <input type="text" name="operatingHours" value={formData.operatingHours} onChange={handleChange} />

        <h2>Key Contact Person</h2>
        <label>Name:</label>
        <input type="text" name="keyContactName" value={formData.keyContactName} onChange={handleChange} />
        
        <label>Position/Title:</label>
        <input type="text" name="keyContactPosition" value={formData.keyContactPosition} onChange={handleChange} />

        <label>Contact Number:</label>
        <input type="text" name="keyContactNumber" value={formData.keyContactNumber} onChange={handleChange} />

        <label>Email Address:</label>
        <input type="email" name="keyContactEmail" value={formData.keyContactEmail} onChange={handleChange} />

        <h2>Bank Information</h2>
        <label>Bank Name:</label>
        <input type="text" name="bankName" value={formData.bankInfo.bankName} onChange={handleChange} />
        
        <label>Account Holder’s Name:</label>
        <input type="text" name="accountHolderName" value={formData.bankInfo.accountHolderName} onChange={handleChange} />
        
        <label>Account Number:</label>
        <input type="text" name="accountNumber" value={formData.bankInfo.accountNumber} onChange={handleChange} />
        
        <label>IFSC Code:</label>
        <input type="text" name="ifscCode" value={formData.bankInfo.ifscCode} onChange={handleChange} />
        
        <label>Branch Address:</label>
        <input type="text" name="branchAddress" value={formData.bankInfo.branchAddress} onChange={handleChange} />

        <h2>Upload Documents</h2>
        <label>Centre Registration Certificate:</label>
        <input type="file" name="registrationCertificate" onChange={handleChange} />
        
        <label>Proof of Address:</label>
        <input type="file" name="proofOfAddress" onChange={handleChange} />
        
        <label>Key Contact’s Photo ID Proof:</label>
        <input type="file" name="photoIdProof" onChange={handleChange} />
        
        <label>Centre Exterior Photo (optional):</label>
        <input type="file" name="centreExteriorPhoto" onChange={handleChange} />

        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PhysiotheripyForm;
