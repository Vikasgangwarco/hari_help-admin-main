import React, { useState } from 'react';
import './DialysisUnitForm.css';  // Importing the CSS file

const DialysisUnitForm = () => {
  const [formData, setFormData] = useState({
    dialysisUnitName: '',
    registrationNumber: '',
    dateOfEstablishment: '',
    dialysisUnitType: '',
    contactNumber: '',
    emergencyContactNumber: '',
    emailAddress: '',
    website: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    dialysisTypes: [],
    additionalServices: [],
    operatingDays: [],
    operatingHours: '',
    keyContact: { name: '', position: '', contactNumber: '', emailAddress: '' },
    totalMachines: '',
    infectionControlMeasures: '',
    patientCapacity: '',
    certifications: '',
    licenseNumber: '',
    staffDetails: [{ name: '', qualification: '', specialization: '', yearsOfExperience: '' }],
    bankInfo: { bankName: '', accountHolderName: '', accountNumber: '', ifscCode: '', branchAddress: '' },
    documents: {
      registrationCertificate: null,
      proofOfAddress: null,
      keyContactPhotoId: null,
      licenseDocument: null,
      dialysisUnitPhoto: null
    },
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? [...prevData[name], value] : prevData[name].filter((item) => item !== value),
      }));
    } else if (name.startsWith('keyContact')) {
      setFormData((prevData) => ({
        ...prevData,
        keyContact: { ...prevData.keyContact, [name.split('.')[1]]: value },
      }));
    } else if (name.startsWith('staffDetails')) {
      const index = parseInt(name.split('.')[1]);
      const field = name.split('.')[2];
      setFormData((prevData) => {
        const updatedStaffDetails = [...prevData.staffDetails];
        updatedStaffDetails[index][field] = value;
        return { ...prevData, staffDetails: updatedStaffDetails };
      });
    } else if (name.startsWith('bankInfo')) {
      setFormData((prevData) => ({
        ...prevData,
        bankInfo: { ...prevData.bankInfo, [name.split('.')[1]]: value },
      }));
    } else if (name.startsWith('documents')) {
      setFormData((prevData) => ({
        ...prevData,
        documents: { ...prevData.documents, [name]: e.target.files[0] }
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  const handleCancel = () => {
    setFormData({
      dialysisUnitName: '',
      registrationNumber: '',
      dateOfEstablishment: '',
      dialysisUnitType: '',
      contactNumber: '',
      emergencyContactNumber: '',
      emailAddress: '',
      website: '',
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      dialysisTypes: [],
      additionalServices: [],
      operatingDays: [],
      operatingHours: '',
      keyContact: { name: '', position: '', contactNumber: '', emailAddress: '' },
      totalMachines: '',
      infectionControlMeasures: '',
      patientCapacity: '',
      certifications: '',
      licenseNumber: '',
      staffDetails: [{ name: '', qualification: '', specialization: '', yearsOfExperience: '' }],
      bankInfo: { bankName: '', accountHolderName: '', accountNumber: '', ifscCode: '', branchAddress: '' },
      documents: {
        registrationCertificate: null,
        proofOfAddress: null,
        keyContactPhotoId: null,
        licenseDocument: null,
        dialysisUnitPhoto: null
      },
      termsAccepted: false,
    });
  };

  return (
    <form className="dialysisUnitForm" onSubmit={handleSubmit}>
      <h2 className="formTitle">Dialysis Unit Information</h2>

      <div className="inputGroup">
        <label>Dialysis Unit Name:</label>
        <input type="text" name="dialysisUnitName" value={formData.dialysisUnitName} onChange={handleChange} required />
      </div>

      <div className="inputGroup">
        <label>Registration Number:</label>
        <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} required />
      </div>

      <div className="inputGroup">
        <label>Date of Establishment:</label>
        <input type="date" name="dateOfEstablishment" value={formData.dateOfEstablishment} onChange={handleChange} required />
      </div>

      <div className="inputGroup">
        <label>Dialysis Unit Type:</label>
        <select name="dialysisUnitType" value={formData.dialysisUnitType} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option value="hospital-based">Hospital-based</option>
          <option value="independent-clinic">Independent Clinic</option>
          <option value="home-dialysis-service">Home Dialysis Service</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="inputGroup">
        <label>Dialysis Unit Contact Number:</label>
        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>Emergency Contact Number:</label>
        <input type="text" name="emergencyContactNumber" value={formData.emergencyContactNumber} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>Email Address:</label>
        <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>Website:</label>
        <input type="url" name="website" value={formData.website} onChange={handleChange} />
      </div>

      <h3 className="sectionTitle">Dialysis Unit Address</h3>
      <div className="inputGroup">
        <label>Street Address:</label>
        <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>Postal Code:</label>
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
      </div>

      <h3 className="sectionTitle">Services Offered</h3>
      <div className="checkboxGroup">
        <label>Dialysis Types Provided:</label>
        <div>
          <input type="checkbox" name="dialysisTypes" value="hemodialysis" onChange={handleChange} /> Hemodialysis
          <input type="checkbox" name="dialysisTypes" value="peritoneal-dialysis" onChange={handleChange} /> Peritoneal Dialysis
          <input type="checkbox" name="dialysisTypes" value="home-hemodialysis" onChange={handleChange} /> Home Hemodialysis
          <input type="checkbox" name="dialysisTypes" value="crrt" onChange={handleChange} /> Continuous Renal Replacement Therapy (CRRT)
        </div>
      </div>

      <div className="checkboxGroup">
        <label>Additional Services:</label>
        <div>
          <input type="checkbox" name="additionalServices" value="24/7-emergency" onChange={handleChange} /> 24/7 Emergency Dialysis
          <input type="checkbox" name="additionalServices" value="online-consultation" onChange={handleChange} /> Online Consultation for Dialysis Management
          <input type="checkbox" name="additionalServices" value="pre-dialysis-counseling" onChange={handleChange} /> Pre-dialysis Counseling
          <input type="checkbox" name="additionalServices" value="diet-consultation" onChange={handleChange} /> Diet and Nutrition Consultation
        </div>
      </div>

      <div className="checkboxGroup">
        <label>Operating Days:</label>
        <div>
          <input type="checkbox" name="operatingDays" value="monday" onChange={handleChange} /> Monday
          <input type="checkbox" name="operatingDays" value="tuesday" onChange={handleChange} /> Tuesday
          <input type="checkbox" name="operatingDays" value="wednesday" onChange={handleChange} /> Wednesday
          <input type="checkbox" name="operatingDays" value="thursday" onChange={handleChange} /> Thursday
          <input type="checkbox" name="operatingDays" value="friday" onChange={handleChange} /> Friday
          <input type="checkbox" name="operatingDays" value="saturday" onChange={handleChange} /> Saturday
          <input type="checkbox" name="operatingDays" value="sunday" onChange={handleChange} /> Sunday
        </div>
      </div>

      <div className="inputGroup">
        <label>Operating Hours:</label>
        <input type="text" name="operatingHours" value={formData.operatingHours} onChange={handleChange} />
      </div>

      <h3 className="sectionTitle">Key Contact</h3>
      <div className="inputGroup">
        <label>Name:</label>
        <input type="text" name="keyContact.name" value={formData.keyContact.name} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>Position:</label>
        <input type="text" name="keyContact.position" value={formData.keyContact.position} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>Contact Number:</label>
        <input type="text" name="keyContact.contactNumber" value={formData.keyContact.contactNumber} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>Email Address:</label>
        <input type="email" name="keyContact.emailAddress" value={formData.keyContact.emailAddress} onChange={handleChange} />
      </div>

      <h3 className="sectionTitle">Bank Information</h3>
      <div className="inputGroup">
        <label>Bank Name:</label>
        <input type="text" name="bankInfo.bankName" value={formData.bankInfo.bankName} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>Account Holder Name:</label>
        <input type="text" name="bankInfo.accountHolderName" value={formData.bankInfo.accountHolderName} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>Account Number:</label>
        <input type="text" name="bankInfo.accountNumber" value={formData.bankInfo.accountNumber} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>IFSC Code:</label>
        <input type="text" name="bankInfo.ifscCode" value={formData.bankInfo.ifscCode} onChange={handleChange} />
      </div>

      <div className="inputGroup">
        <label>Branch Address:</label>
        <input type="text" name="bankInfo.branchAddress" value={formData.bankInfo.branchAddress} onChange={handleChange} />
      </div>

      <h3 className="sectionTitle">Documents Upload</h3>
      <div className="fileGroup">
        <label>Registration Certificate:</label>
        <input type="file" name="registrationCertificate" onChange={handleChange} />
      </div>

      <div className="fileGroup">
        <label>Proof of Address:</label>
        <input type="file" name="proofOfAddress" onChange={handleChange} />
      </div>

      <div className="fileGroup">
        <label>Key Contact Photo ID:</label>
        <input type="file" name="keyContactPhotoId" onChange={handleChange} />
      </div>

      <div className="fileGroup">
        <label>License Document:</label>
        <input type="file" name="licenseDocument" onChange={handleChange} />
      </div>

      <div className="fileGroup">
        <label>Dialysis Unit Photo:</label>
        <input type="file" name="dialysisUnitPhoto" onChange={handleChange} />
      </div>

      <div className="checkboxGroup">
        <input type="checkbox" name="termsAccepted" onChange={handleChange} /> I accept the terms and conditions
      </div>

      <div className="formActions">
        <button type="submit" className="submitButton">Submit</button>
        <button type="button" className="cancelButton" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default DialysisUnitForm;
