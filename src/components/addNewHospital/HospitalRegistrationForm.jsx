import React, { useState } from 'react';
import './HospitalRegistrationForm.css'; // Regular CSS import

const HospitalRegistrationForm = () => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    registrationNumber: '',
    dateOfEstablishment: '',
    hospitalType: '',
    specialtyHospitalType: '',
    contactNumber: '',
    emergencyContactNumber: '',
    emailAddress: '',
    website: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    specializations: '',
    services: {
      inpatient: false,
      outpatient: false,
      emergency: false,
      telemedicine: false,
      diagnostic: false,
      pharmacy: false,
      surgery: false,
      icu: false,
      bloodBank: false,
      physiotherapy: false,
      dialysis: false,
      otherServices: ''
    },
    operatingHours: '',
    keyContact: {
      name: '',
      position: '',
      contactNumber: '',
      emailAddress: '',
    },
    doctors: [{
      name: '',
      specialization: '',
      yearsOfExperience: '',
      consultationFee: '',
      availability: ''
    }],
    totalBeds: '',
    icuBeds: '',
    specialCareUnitBeds: '',
    bankInfo: {
      bankName: '',
      accountHolderName: '',
      accountNumber: '',
      ifscCode: '',
      branchAddress: '',
    },
    documents: {
      registrationCertificate: null,
      accreditationProof: null,
      addressProof: null,
      photoIdProof: null,
      exteriorPhoto: null,
    },
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckBoxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [name]: checked,
      },
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      documents: {
        ...formData.documents,
        [name]: files[0],
      },
    });
  };

  const handleDoctorChange = (index, e) => {
    const { name, value } = e.target;
    const newDoctors = [...formData.doctors];
    newDoctors[index] = {
      ...newDoctors[index],
      [name]: value,
    };
    setFormData({ ...formData, doctors: newDoctors });
  };

  const handleAddDoctor = () => {
    setFormData({
      ...formData,
      doctors: [
        ...formData.doctors,
        { name: '', specialization: '', yearsOfExperience: '', consultationFee: '', availability: '' }
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  const handleCancel = () => {
    setFormData({
      hospitalName: '',
      registrationNumber: '',
      dateOfEstablishment: '',
      hospitalType: '',
      specialtyHospitalType: '',
      contactNumber: '',
      emergencyContactNumber: '',
      emailAddress: '',
      website: '',
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      specializations: '',
      services: {
        inpatient: false,
        outpatient: false,
        emergency: false,
        telemedicine: false,
        diagnostic: false,
        pharmacy: false,
        surgery: false,
        icu: false,
        bloodBank: false,
        physiotherapy: false,
        dialysis: false,
        otherServices: ''
      },
      operatingHours: '',
      keyContact: {
        name: '',
        position: '',
        contactNumber: '',
        emailAddress: '',
      },
      doctors: [{
        name: '',
        specialization: '',
        yearsOfExperience: '',
        consultationFee: '',
        availability: ''
      }],
      totalBeds: '',
      icuBeds: '',
      specialCareUnitBeds: '',
      bankInfo: {
        bankName: '',
        accountHolderName: '',
        accountNumber: '',
        ifscCode: '',
        branchAddress: '',
      },
      documents: {
        registrationCertificate: null,
        accreditationProof: null,
        addressProof: null,
        photoIdProof: null,
        exteriorPhoto: null,
      },
      termsAccepted: false,
    });
    
  };

  return (
    <form onSubmit={handleSubmit} className="hospital-registration-form">
      <h1>Hospital Registration</h1>

      {/* Hospital Information */}
      <div className="hospital-registration-form__section">
        <h2>Hospital Information</h2>
        <label>Hospital Name:</label>
        <input type="text" name="hospitalName" value={formData.hospitalName} onChange={handleChange} required />
        <label>Registration Number:</label>
        <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} required />
        <label>Date of Establishment:</label>
        <input type="date" name="dateOfEstablishment" value={formData.dateOfEstablishment} onChange={handleChange} required />
        <label>Hospital Type:</label>
        <select name="hospitalType" value={formData.hospitalType} onChange={handleChange} required>
          <option value="general">General Hospital</option>
          <option value="specialty">Specialty Hospital</option>
          <option value="multi-specialty">Multi-Specialty Hospital</option>
          <option value="other">Other</option>
        </select>
        {formData.hospitalType === 'specialty' || formData.hospitalType === 'other' ? (
          <input
            type="text"
            name="specialtyHospitalType"
            placeholder="Specify specialty type"
            value={formData.specialtyHospitalType}
            onChange={handleChange}
          />
        ) : null}
      </div>

      {/* Contact Information */}
      <div className="hospital-registration-form__section">
        <h2>Contact Information</h2>
        <label>Hospital Contact Number:</label>
        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        <label>Emergency Contact Number:</label>
        <input type="text" name="emergencyContactNumber" value={formData.emergencyContactNumber} onChange={handleChange} />
        <label>Email Address:</label>
        <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
        <label>Website:</label>
        <input type="url" name="website" value={formData.website} onChange={handleChange} />
      </div>

      {/* Address */}
      <div className="hospital-registration-form__section">
        <h2>Hospital Address</h2>
        <label>Street Address:</label>
        <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        <label>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        <label>Postal Code:</label>
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        <label>Country:</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} required />
      </div>

      {/* Hospital Services */}
      <div className="hospital-registration-form__section">
        <h2>Hospital Services</h2>
        <label>Specializations Offered:</label>
        <input type="text" name="specializations" value={formData.specializations} onChange={handleChange} />
        
        <div className="hospital-registration-form__checkbox">
          {Object.keys(formData.services).map(service => (
            service !== 'otherServices' && (
              <label key={service}>
                <input
                  type="checkbox"
                  name={service}
                  checked={formData.services[service]}
                  onChange={handleCheckBoxChange}
                />
                {service.replace(/([A-Z])/g, ' $1').toUpperCase()}
              </label>
            )
          ))}
          <label>Other (please specify):</label>
          <input
            type="text"
            name="otherServices"
            value={formData.services.otherServices}
            onChange={handleCheckBoxChange}
          />
        </div>
      </div>

      {/* Hospital Timings */}
      <div className="hospital-registration-form__section">
        <h2>Operating Hours</h2>
        <label>Operating Hours:</label>
        <input
          type="text"
          name="operatingHours"
          value={formData.operatingHours}
          onChange={handleChange}
        />
      </div>

      {/* Key Contact Person */}
      <div className="hospital-registration-form__section">
        <h2>Key Contact Person</h2>
        <label>Name:</label>
        <input
          type="text"
          name="keyContact.name"
          value={formData.keyContact.name}
          onChange={handleChange}
          required
        />
        <label>Position/Title:</label>
        <input
          type="text"
          name="keyContact.position"
          value={formData.keyContact.position}
          onChange={handleChange}
        />
        <label>Contact Number:</label>
        <input
          type="text"
          name="keyContact.contactNumber"
          value={formData.keyContact.contactNumber}
          onChange={handleChange}
        />
        <label>Email Address:</label>
        <input
          type="email"
          name="keyContact.emailAddress"
          value={formData.keyContact.emailAddress}
          onChange={handleChange}
        />
      </div>

      {/* Doctors */}
      <div className="hospital-registration-form__section">
        <h2>Doctors at This Hospital</h2>
        {formData.doctors.map((doctor, index) => (
          <div key={index}>
            <label>Doctor’s Name:</label>
            <input
              type="text"
              name="name"
              value={doctor.name}
              onChange={(e) => handleDoctorChange(index, e)}
            />
            <label>Specialization:</label>
            <input
              type="text"
              name="specialization"
              value={doctor.specialization}
              onChange={(e) => handleDoctorChange(index, e)}
            />
            <label>Years of Experience:</label>
            <input
              type="text"
              name="yearsOfExperience"
              value={doctor.yearsOfExperience}
              onChange={(e) => handleDoctorChange(index, e)}
            />
            <label>Consultation Fee:</label>
            <input
              type="text"
              name="consultationFee"
              value={doctor.consultationFee}
              onChange={(e) => handleDoctorChange(index, e)}
            />
            <label>Availability:</label>
            <input
              type="text"
              name="availability"
              value={doctor.availability}
              onChange={(e) => handleDoctorChange(index, e)}
            />
            <hr />
          </div>
        ))}
        <button type="button" onClick={handleAddDoctor}>Add Doctor</button>
      </div>

      {/* Bed Availability */}
      <div className="hospital-registration-form__section">
        <h2>Bed Availability</h2>
        <label>Total Beds:</label>
        <input type="text" name="totalBeds" value={formData.totalBeds} onChange={handleChange} />
        <label>ICU Beds:</label>
        <input type="text" name="icuBeds" value={formData.icuBeds} onChange={handleChange} />
        <label>Special Care Unit Beds:</label>
        <input type="text" name="specialCareUnitBeds" value={formData.specialCareUnitBeds} onChange={handleChange} />
      </div>

      {/* Bank Information */}
      <div className="hospital-registration-form__section">
        <h2>Bank Information</h2>
        <label>Bank Name:</label>
        <input
          type="text"
          name="bankInfo.bankName"
          value={formData.bankInfo.bankName}
          onChange={handleChange}
        />
        <label>Account Holder's Name:</label>
        <input
          type="text"
          name="bankInfo.accountHolderName"
          value={formData.bankInfo.accountHolderName}
          onChange={handleChange}
        />
        <label>Account Number:</label>
        <input
          type="text"
          name="bankInfo.accountNumber"
          value={formData.bankInfo.accountNumber}
          onChange={handleChange}
        />
        <label>IFSC Code:</label>
        <input
          type="text"
          name="bankInfo.ifscCode"
          value={formData.bankInfo.ifscCode}
          onChange={handleChange}
        />
        <label>Branch Address:</label>
        <input
          type="text"
          name="bankInfo.branchAddress"
          value={formData.bankInfo.branchAddress}
          onChange={handleChange}
        />
      </div>

      {/* Upload Documents */}
      <div className="hospital-registration-form__section">
        <h2>Upload Documents</h2>
        <label>Hospital Registration Certificate:</label>
        <input
          type="file"
          name="registrationCertificate"
          onChange={handleFileChange}
        />
        <label>Accreditation Proof:</label>
        <input
          type="file"
          name="accreditationProof"
          onChange={handleFileChange}
        />
        <label>Proof of Address:</label>
        <input
          type="file"
          name="addressProof"
          onChange={handleFileChange}
        />
        <label>Key Contact’s Photo ID Proof:</label>
        <input
          type="file"
          name="photoIdProof"
          onChange={handleFileChange}
        />
        <label>Hospital Exterior Photo (Optional):</label>
        <input
          type="file"
          name="exteriorPhoto"
          onChange={handleFileChange}
        />
      </div>

      {/* Terms and Conditions */}
      {/* <div className="hospital-registration-form__section">
        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          We hereby confirm that the information provided is accurate and that our hospital is a licensed healthcare facility.
        </label>
        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          We agree to the Terms and Conditions and Privacy Policy of HariHelp.com.
        </label>
        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          We consent to the listing and use of our hospital’s details on HariHelp.com’s platform for patient services.
        </label>
      </div> */}

      {/* Buttons */}
      <div className="hospital-registration-form__buttons">
        <button type="submit" className="hospital-registration-form__submit-btn">
          Submit
        </button>
        <button type="button" className="hospital-registration-form__cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default HospitalRegistrationForm;
