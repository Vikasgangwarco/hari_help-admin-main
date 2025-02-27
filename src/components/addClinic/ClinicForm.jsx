import React, { useEffect, useState } from "react";
import "./ClinicForm.css";

const ClinicForm = ({ onCancel, clinic, isDisabled, onSaveBtnClick, disableContact, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    clinicName: "",
    contactNumber: "",
    alternateNumber: "",
    email: "",
    websiteLnk: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    registrationNumber: "",
    dateOfEstablishment: "",
    clinicType: "",
    specialty: "",
    otherClinicType: "",
    specializationsOffered: [],
    inPersonConsultations: false,
    onlineConsultations: false,
    telemedicineServices: false,
    diagnosticTests: false,
    pharmacy: false,
    emergencyServices: false,
    otherServices: "",
    operatingDays: [],
    operatingHours: "",
    keyContactPersonName: "",
    keyContactPersonNumber: "",
    keyContactPersonDesignation: "",
    keyContactPersonEmail: "",
    doctors: [
      {
        doctorName: "",
        specialization: "",
        yearsOfExperience: "",
        gender: "",
        qualification: "",
        dateOfBirth: "",
        consultationFee: "",
        availability: "",
      },
    ],
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    branchAddress: "",
    clinicRegistrationCertificate: "",
    proofOfAddress: "",
    keyContactPhotoIdProof: "",
    clinicExteriorPhoto: "",
    clinicInteriorPhoto: "",
    tcConfirmation: false,
    tcAgreement: false,
    tcConsent: false,
    tcSignature: "",
    tcDate: "",
    tcTime: "",
    previous_IPD_Numbers: "",
    previous_OPD_Numbers: "",
    current_IPD_Numbers: "",
    current_OPD_Numbers: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (clinic) {
      setFormData({
        ...formData,
        clinicName: clinic.clinicName || "",
        registrationNumber: clinic.registrationNumber || "",
        dateOfEstablishment: clinic.dateOfEstablishment || "",
        clinicType: clinic.clinicType || "",
        contactNumber: clinic.contactNumber || "",
        alternateNumber: clinic.alternateNumber || "",
        email: clinic.email || "",
        website: clinic.website || "",
        streetAddress: clinic.streetAddress || "",
        city: clinic.city || "",
        state: clinic.state || "",
        postalCode: clinic.postalCode || "",
        country: clinic.country || "",
        specializations: clinic.specializations || "",
        services: {
          inPerson: clinic.services?.inPerson || false,
          telemedicine: clinic.services?.telemedicine || false,
          diagnosticTests: clinic.services?.diagnosticTests || false,
          pharmacy: clinic.services?.pharmacy || false,
          emergency: clinic.services?.emergency || false,
          other: clinic.services?.other || "",
        },
        operatingDays: clinic.operatingDays || "",
        operatingHours: clinic.operatingHours || "",
        keyContact: {
          name: clinic.keyContact?.name || "",
          position: clinic.keyContact?.position || "",
          contactNumber: clinic.keyContact?.contactNumber || "",
          alternateNumber: clinic.keyContact?.alternateNumber || "",
          email: clinic.keyContact?.email || "",
        },
        doctors: clinic.doctors?.map(doctor => ({
          doctorName: doctor.doctorName || "",
          dateOfBirth: doctor.dateOfBirth || "",
          gender: doctor.gender || "",
          specialization: doctor.specialization || "",
          yearsOfExperience: doctor.yearsOfExperience || "",
          consultationFee: doctor.consultationFee || "",
          availability: doctor.availability || "",
        })) || [],
        bankDetails: {
          bankName: clinic.bankDetails?.bankName || "",
          accountHolder: clinic.bankDetails?.accountHolder || "",
          accountNumber: clinic.bankDetails?.accountNumber || "",
          ifscCode: clinic.bankDetails?.ifscCode || "",
          branchAddress: clinic.bankDetails?.branchAddress || "",
        },
        files: {
          clinicRegistrationCertificate: clinic.files?.clinicRegistrationCertificate || null,
          proofOfAddress: clinic.files?.proofOfAddress || null,
          contactIdProof: clinic.files?.contactIdProof || null,
          exteriorPhoto: clinic.files?.exteriorPhoto || null,
          previousReports: clinic.files?.previousReports || null,
          keyContactPhotoIdProof: clinic.keyContactPhotoIdProof || null,
        },
        termsAccepted: clinic.termsAccepted || false,
        signature: clinic.signature || "",
        date: clinic.date || "",
        previous_IPD_Numbers: clinic.previous_IPD_Numbers || "",
        previous_OPD_Numbers: clinic.previous_OPD_Numbers || "",
        current_IPD_Numbers: clinic.current_IPD_Numbers || "",
        current_OPD_Numbers: clinic.current_OPD_Numbers || "",
      });
    }
  }, [clinic]);
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    console.log(name, type, value)
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

    //     if (type === "checkbox") {
    //   // Handle checkbox inputs
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     [name]: checked,
    //   }));
    // } else if (type === "file") {
    //   // Handle file inputs
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     [name]: files[0], // Assuming single file upload
    //   }));
    // } else if (Array.isArray(formData[name])) {
    //   // Handle multi-select or array-based inputs
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     [name]: value.split(","), // Assuming comma-separated values
    //   }));
    // } else if (typeof formData[name] === "object" && formData[name] !== null) {
    //   // Handle nested objects (e.g., `doctors` array)
    //   const [key, subKey] = name.split(".");
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     [key]: {
    //       ...prevState[key],
    //       [subKey]: value,
    //     },
    //   }));
    // } else {
    //   // Handle text or other input types
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     [name]: value,
    //   }));
    // }
    console.log("==========formData============", formData)
  };



  const handleFileChange = (e) => {
    const { name, files } = e.target;
    console.log( name, files[0].name,)
    setFormData((prevState) => ({
      ...prevState,
      name: files[0].name,
    }))
     console.log("handleFileChange=====", formData, name, files)
  };

  const addDoctor = () => {
    setFormData({
      ...formData,
      doctors: [
        ...formData.doctors,
        { doctorName: "", dateOfBirth: "", gender: "", specialization: "", yearsOfExperience: "", consultationFee: "", availability: "" },
      ],
    });
  };

  const handleDoctorChange = (index, e) => {
    const { name, value } = e.target;

    // Update the specific doctor object
    const updatedDoctors = formData.doctors.map((doctor, i) =>
      i === index ? { ...doctor, [name]: value } : doctor
    );

    // Update the state with the modified doctors array
    setFormData((prevState) => ({
      ...prevState,
      doctors: updatedDoctors,
    }));
  };


  const validateForm = () => {
    const errors = {};
    if (!formData.clinicName) errors.clinicName = "Clinic Name is required.";
    if (!formData.registrationNumber) errors.registrationNumber = "Registration Number is required.";
    if (!formData.contactNumber) errors.contactNumber = "Contact Number is required.";
    if (!formData.alternateNumber) errors.alternateNumber = "Alternate Number is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.streetAddress) errors.streetAddress = "Street Address is required.";
    if (!formData.city) errors.city = "City is required.";
    if (!formData.state) errors.state = "State is required.";
    if (!formData.postalCode) errors.postalCode = "Postal Code is required.";
    if (!formData.country) errors.country = "Country is required.";
    if (!formData.operatingHours) errors.operatingHours = "Operating Hours are required.";
    if (!formData.files.clinicRegistrationCertificate) errors.clinicRegistrationCertificate = "Registration Certificate is required.";
    if (!formData.files.proofOfAddress) errors.proofOfAddress = "Proof of Address is required.";
    if (!formData.keyContactPhotoIdProof) errors.keyContactPhotoIdProof = "Key Contact Photo ID Proof is required.";
    if (!formData.bankDetails.bankName) errors.bankName = "Bank Name is required.";
    if (!formData.bankDetails.accountHolder) errors.accountHolder = "Account Holder Name is required.";
    if (!formData.bankDetails.accountNumber) errors.accountNumber = "Account Number is required.";
    if (!formData.bankDetails.ifscCode) errors.ifscCode = "IFSC Code is required.";
    if (!formData.bankDetails.branchAddress) errors.branchAddress = "Branch Address is required.";
    if (!formData.keyContact.name) errors.keyContactName = "Key Contact Name is required.";
    if (!formData.keyContact.position) errors.keyContactPosition = "Key Contact Position is required.";
    if (!formData.keyContact.contactNumber) errors.keyContactContactNumber = "Key Contact Number is required.";
    if (!formData.keyContact.alternateNumber) errors.keyContactAlternateNumber = "Key Contact Alternate Number is required.";
    if (!formData.keyContact.email) errors.keyContactEmail = "Key Contact Email is required.";
    if (!formData.signature) errors.signature = "Signature is required.";
    if (!formData.date) errors.date = "Date is required.";
    if (!formData.previous_IPD_Numbers) errors.previous_IPD_Numbers = "Previous IPD Numbers are required.";
    if (!formData.previous_OPD_Numbers) errors.previous_OPD_Numbers = "Previous OPD Numbers are required.";
    if (!formData.current_IPD_Numbers) errors.current_IPD_Numbers = "Current IPD Numbers are required.";
    if (!formData.current_OPD_Numbers) errors.current_OPD_Numbers = "Current OPD Numbers are required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onFormSubmit(formData);
    if (validateForm()) {
      // Additional form submission logic
    }
  };

  const handleCancel = () => {
    setIsFormVisible(false);
  };

  if (!isFormVisible) return null;

  return (
    <form className="clinic-form" onSubmit={handleSubmit}>
      <h2>Clinic Information</h2>
      <label>
        Clinic Name:
        <input
          type="text"
          name="clinicName"
          value={formData.clinicName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Registration Number:
        <input
          type="text"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Date of Establishment:
        <input
          type="date"
          name="dateOfEstablishment"
          value={formData.dateOfEstablishment}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Clinic Type:
        <select
          name="clinicType"
          value={formData.clinicType}
          onChange={handleInputChange}
        >
          <option value="General-Practice">General Practice</option>
          <option value="Specialty">Specialty</option>
          <option value="Multi-Specialty">Multi-Specialty</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label>
        Website:
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Clinic Contact Number:
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Alternate Contact Number:
        <input
          type="text"
          name="alternateNumber"
          value={formData.alternateNumber}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>

      <h3>Doctors</h3>
      {formData.doctors.map((doctor, index) => (
        <div key={index}>
          <label>
            Doctor’s Name:
            <input
              type="text"
              name="doctorName"
              value={doctor.name}
              onChange={(e) => handleDoctorChange(index, e)}
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={(e) => handleDoctorChange(index, e)}
            />
          </label>
          <label>
            Gender:
            <select
              name="gender"
              value={doctor.gender}
              onChange={(e) => handleDoctorChange(index, e)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            Specialization:
            <input
              type="text"
              name="specialization"
              value={doctor.specialization}
              onChange={(e) => handleDoctorChange(index, e)}
            />
          </label>
          <label>
            Years of Experience:
            <input
              type="number"
              name="yearsOfExperience"
              value={doctor.experience}
              onChange={(e) => handleDoctorChange(index, e)}
            />
          </label>
          <label>
            Consultation Fee:
            <input
              type="number"
              name="consultationFee"
              value={doctor.fee}
              onChange={(e) => handleDoctorChange(index, e)}
            />
          </label>
          <label>
            Availability:
            <input
              type="text"
              name="availability"
              value={doctor.availability}
              onChange={(e) => handleDoctorChange(index, e)}
            />
          </label>
           <label>
            Qualification:
            <input
              type="text"
              name="qualification"
              value={doctor.qualification}
              onChange={(e) => handleDoctorChange(index, e)}
            />
          </label>
        </div>
      ))}
      <button
        type="button"
        className="add-doctor-button"
        onClick={addDoctor}
      >
        Add Doctor
      </button>

      <h2>Clinic Services</h2>
      <label>
        <input
          type="checkbox"
          name="inPersonConsultations"
          checked={formData.inPersonConsultations}
          onChange={handleInputChange}
        />
        In-Person Consultations
      </label>
      <label>
        <input
          type="checkbox"
          name="telemedicineServices"
          checked={formData.telemedicineServices}
          onChange={handleInputChange}
        />
        Telemedicine
      </label>
      <label>
        <input
          type="checkbox"
          name="diagnosticTests"
          checked={formData.diagnosticTests}
          onChange={handleInputChange}
        />
        Diagnostic Tests
      </label>
      <label>
        <input
          type="checkbox"
          name="pharmacy"
          checked={formData.pharmacy}
          onChange={handleInputChange}
        />
        Pharmacy
      </label>
      <label>
        <input
          type="checkbox"
          name="emergencyServices"
          checked={formData.emergencyServices}
          onChange={handleInputChange}
        />
        Emergency Services
      </label>
      <label>
        Other Services:
        <input
          type="text"
          name="otherServices"
          value={formData.otherServices}
          onChange={handleInputChange}
        />
      </label>

      <h2>File Uploads</h2>
      <label>
        Registration Certificate:
        <input
          type="file"
          name="clinicRegistrationCertificate"
          onChange={handleFileChange}
        />
      </label>
      <label>
        Proof of Address:
        <input
          type="file"
          name="proofOfAddress"
          onChange={handleFileChange}
        />
      </label>
      <label>
        Contact ID Proof:
        <input
          type="file"
          name="contactIdProof"
          onChange={handleFileChange}
        />
      </label>
      <label>
        Exterior Photo:
        <input
          type="file"
          name="clinicExteriorPhoto"
          onChange={handleFileChange}
        />
      </label>
      <label>
        Previous Reports:
        <input
          type="file"
          name="previousReports"
          onChange={handleFileChange}
        />
      </label>
      <label>
        Key Contact Photo ID Proof:
        <input
          type="file"
          name="keyContactPhotoIdProof"
          onChange={handleFileChange}
        />
      </label>
      <h2>Additional Information</h2>
      <label>
        Signature:
        <input
          type="text"
          name="signature"
          value={formData.signature}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Previous IPD Numbers:
        <input
          type="text"
          name="previous_IPD_Numbers"
          value={formData.previous_IPD_Numbers}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Previous OPD Numbers:
        <input
          type="text"
          name="previous_OPD_Numbers"
          value={formData.previous_OPD_Numbers}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Current_IPD_Numbers:
        <input
          type="text"
          name="current_IPD_Numbers"
          value={formData.current_IPD_Numbers}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Current_OPD_Numbers:
        <input
          type="text"
          name="current_OPD_Numbers"
          value={formData.current_OPD_Numbers}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Street Address:
        <input
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleInputChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
      </label>
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Postal Code:
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Operating Hours:
        <input
          type="text"
          name="operatingHours"
          value={formData.operatingHours}
          onChange={handleInputChange}
        />
      </label>
      <label>
        key Contact Person Name
        <input
          type="text"
          name="keyContactPersonName"
          value={formData.keyContactPersonName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Key Contact Person Number
        <input
          type="text"
          name="keyContactPersonNumber"
          value={formData.keyContactPersonNumber}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Key Contact Person Designation
        <input
          type="text"
          name="keyContactPersonDesignation"
          value={formData.keyContactPersonDesignation}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Key Contact Person Email
        <input
          type="text"
          name="keyContactPersonEmail"
          value={formData.keyContactPersonEmail}
          onChange={handleInputChange}
        />
      </label>
      <h2>Bank  Details</h2>
      <label>
        Bank Name
        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Account Holder Name
        <input
          type="text"
          name="accountHolderName"
          value={formData.accountHolderName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Account Number
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Ifsc Code
        <input
          type="text"
          name="ifscCode"
          value={formData.ifscCode}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Branch Address
        <input
          type="text"
          name="branchAddress"
          value={formData.branchAddress}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default ClinicForm;
