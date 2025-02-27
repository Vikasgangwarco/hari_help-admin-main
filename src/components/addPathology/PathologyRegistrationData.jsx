import React, { useState } from "react";
import "./PathologyRegistrationData.css"; // Import the scoped CSS file

function PathologyRegistrationData() {
  const [formData, setFormData] = useState({
    labName: "",
    labRegNumber: "",
    establishmentDate: "",
    labType: "",
    contactNumber: "",
    email: "",
    website: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    testTypes: "",
    services: {
      sampleCollectionAtLab: false,
      homeSampleCollection: false,
      onlineReportAccess: false,
      walkInAppointments: false,
      radiologyServices: false,
    },
    operatingDays: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
    operatingHours: "",
    keyContact: {
      name: "",
      position: "",
      contactNumber: "",
      email: "",
    },
    certifications: "",
    staff: [{ name: "", qualification: "", specialization: "", experience: "" }],
    bankInfo: {
      bankName: "",
      accountHolderName: "",
      accountNumber: "",
      ifscCode: "",
      branchAddress: "",
    },
    uploadedDocs: {
      registrationCert: null,
      addressProof: null,
      idProof: null,
      labPhotos: null,
    },
    termsAgreed: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "services" || name === "operatingDays") {
      setFormData((prev) => ({
        ...prev,
        [name]: { ...prev[name], [value]: checked },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    }
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      uploadedDocs: {
        ...prev.uploadedDocs,
        [name]: files[0],
      },
    }));
  };

  const handleCancel = () => {
    setFormData({
      labName: "",
      labRegNumber: "",
      establishmentDate: "",
      labType: "",
      contactNumber: "",
      email: "",
      website: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      testTypes: "",
      services: {
        sampleCollectionAtLab: false,
        homeSampleCollection: false,
        onlineReportAccess: false,
        walkInAppointments: false,
        radiologyServices: false,
      },
      operatingDays: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
      },
      operatingHours: "",
      keyContact: {
        name: "",
        position: "",
        contactNumber: "",
        email: "",
      },
      certifications: "",
      staff: [{ name: "", qualification: "", specialization: "", experience: "" }],
      bankInfo: {
        bankName: "",
        accountHolderName: "",
        accountNumber: "",
        ifscCode: "",
        branchAddress: "",
      },
      uploadedDocs: {
        registrationCert: null,
        addressProof: null,
        idProof: null,
        labPhotos: null,
      },
      termsAgreed: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="pathology-registration-container">
      <h1>Pathology Lab Registration</h1>
      <form onSubmit={handleSubmit}>
        {/* Lab Information */}
        <fieldset>
          <legend>Lab Information</legend>
          <input
            type="text"
            name="labName"
            placeholder="Lab Name"
            value={formData.labName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="labRegNumber"
            placeholder="Lab Registration Number"
            value={formData.labRegNumber}
            onChange={handleInputChange}
          />
          <input
            type="date"
            name="establishmentDate"
            value={formData.establishmentDate}
            onChange={handleInputChange}
          />
          <select name="labType" value={formData.labType} onChange={handleInputChange}>
            <option value="">Select Lab Type</option>
            <option value="diagnostic">Diagnostic Lab</option>
            <option value="clinical">Clinical Lab</option>
            <option value="research">Research Lab</option>
            <option value="other">Other</option>
          </select>
        </fieldset>

        {/* Contact Information */}
        <fieldset>
          <legend>Contact Information</legend>
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="website"
            placeholder="Website (if applicable)"
            value={formData.website}
            onChange={handleInputChange}
          />
        </fieldset>

        {/* Lab Address */}
        <fieldset>
          <legend>Lab Address</legend>
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </fieldset>

        {/* Services */}
        <fieldset>
          <legend>Services</legend>
          <label>
            <input
              type="checkbox"
              name="services"
              value="sampleCollectionAtLab"
              checked={formData.services.sampleCollectionAtLab}
              onChange={handleCheckboxChange}
            />
            Sample Collection at Lab
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="homeSampleCollection"
              checked={formData.services.homeSampleCollection}
              onChange={handleCheckboxChange}
            />
            Home Sample Collection
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="onlineReportAccess"
              checked={formData.services.onlineReportAccess}
              onChange={handleCheckboxChange}
            />
            Online Report Access
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="walkInAppointments"
              checked={formData.services.walkInAppointments}
              onChange={handleCheckboxChange}
            />
            Walk-in Appointments
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="radiologyServices"
              checked={formData.services.radiologyServices}
              onChange={handleCheckboxChange}
            />
            Radiology Services
          </label>
        </fieldset>

        {/* Terms and Conditions */}
        <fieldset>
          <div>
            <input
              type="checkbox"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleCheckboxChange}
            />
            I confirm that the information provided is accurate and agree to the Terms and Conditions.
          </div>
        </fieldset>

        {/* Form Buttons */}
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default PathologyRegistrationData;
