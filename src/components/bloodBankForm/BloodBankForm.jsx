import React from 'react';
import './BloodBankForm.css';

const BloodBankForm = () => {
    return (
        <form className="blood-bank-form">
            <h2>Blood Bank Information</h2>

            <label>Blood Bank Name:</label>
            <input type="text" name="bloodBankName" required />

            <label>Registration Number:</label>
            <input type="text" name="registrationNumber" required />

            <label>Date of Establishment:</label>
            <input type="date" name="dateOfEstablishment" required />

            <label>Blood Bank Type:</label>
            <select name="bloodBankType" required>
                <option value="government">Government</option>
                <option value="private">Private</option>
                <option value="ngo">NGO/Charitable</option>
                <option value="other">Other</option>
            </select>

            <h3>Contact Information</h3>

            <label>Blood Bank Contact Number:</label>
            <input type="tel" name="contactNumber" required />

            <label>Emergency Contact Number (if applicable):</label>
            <input type="tel" name="emergencyContactNumber" />

            <label>Email Address:</label>
            <input type="email" name="email" required />

            <label>Website (if applicable):</label>
            <input type="url" name="website" />

            <h3>Blood Bank Address</h3>

            <label>Street Address:</label>
            <input type="text" name="streetAddress" required />

            <label>City:</label>
            <input type="text" name="city" required />

            <label>State:</label>
            <input type="text" name="state" required />

            <label>Postal Code:</label>
            <input type="text" name="postalCode" required />

            <label>Country:</label>
            <input type="text" name="country" required />

            <h3>Services Offered</h3>

            <label>Blood Components Available:</label>
            <div className="checkbox-group">
                <label><input type="checkbox" name="bloodComponents" value="wholeBlood" /> Whole Blood</label>
                <label><input type="checkbox" name="bloodComponents" value="platelets" /> Platelets</label>
                <label><input type="checkbox" name="bloodComponents" value="plasma" /> Plasma</label>
                <label><input type="checkbox" name="bloodComponents" value="rbcs" /> Red Blood Cells (RBCs)</label>
                <label><input type="checkbox" name="bloodComponents" value="wbcs" /> White Blood Cells (WBCs)</label>
                <label><input type="checkbox" name="bloodComponents" value="other" /> Other</label>
            </div>

            <label>Available Services:</label>
            <div className="checkbox-group">
                <label><input type="checkbox" name="services" value="bloodDonationCamps" /> Blood Donation Camps</label>
                <label><input type="checkbox" name="services" value="emergencyServices" /> 24/7 Emergency Services</label>
                <label><input type="checkbox" name="services" value="collectionAndStorage" /> Blood Collection and Storage</label>
                <label><input type="checkbox" name="services" value="homePickup" /> Home Blood Donation Pickup</label>
                <label><input type="checkbox" name="services" value="other" /> Other</label>
            </div>

            <h3>Operating Hours</h3>

            <label>Days of Operation:</label>
            <div className="checkbox-group">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                    <label key={day}><input type="checkbox" name="daysOfOperation" value={day.toLowerCase()} /> {day}</label>
                ))}
            </div>

            <label>Operating Hours:</label>
            <input type="text" name="operatingHours" placeholder="e.g., Monday - Friday, 8:00 AM - 6:00 PM" required />

            <h3>Key Contact Person</h3>

            <label>Name:</label>
            <input type="text" name="keyContactName" required />

            <label>Position/Title:</label>
            <input type="text" name="position" required />

            <label>Contact Number:</label>
            <input type="tel" name="keyContactNumber" required />

            <label>Email Address:</label>
            <input type="email" name="keyContactEmail" required />

            <h3>Blood Stock Information</h3>

            <label>Blood Groups Available:</label>
            <div className="checkbox-group">
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(group => (
                    <label key={group}><input type="checkbox" name="bloodGroups" value={group} /> {group}</label>
                ))}
            </div>

            <h3>Certifications and Licenses</h3>

            <label>Accreditations/Certifications (e.g., FDA, NABH):</label>
            <input type="text" name="certifications" />

            <label>License Number:</label>
            <input type="text" name="licenseNumber" required />

            <h3>Bank Information (For Payment Transactions)</h3>

            <label>Bank Name:</label>
            <input type="text" name="bankName" required />

            <label>Account Holder’s Name:</label>
            <input type="text" name="accountHolderName" required />

            <label>Account Number:</label>
            <input type="text" name="accountNumber" required />

            <label>IFSC Code:</label>
            <input type="text" name="ifscCode" required />

            <label>Branch Address:</label>
            <input type="text" name="branchAddress" required />

            <h3>Upload Documents</h3>

            <label>Blood Bank Registration Certificate:</label>
            <input type="file" name="registrationCertificate" required />

            <label>Proof of Address:</label>
            <input type="file" name="proofOfAddress" required />

            <label>Key Contact’s Photo ID Proof:</label>
            <input type="file" name="photoIdProof" required />

            <label>License Document:</label>
            <input type="file" name="licenseDocument" required />

            <label>Blood Bank Exterior Photo (optional):</label>
            <input type="file" name="exteriorPhoto" />

            <h3>Terms and Conditions</h3>

            <div className="terms-and-conditions">
                <label>
                    <input type="checkbox" name="confirmAccuracy" required />
                    We confirm that the information provided is accurate and that our blood bank is a licensed facility.
                </label>

                <label>
                    <input type="checkbox" name="agreeToTerms" required />
                    We agree to the Terms and Conditions and Privacy Policy of HariHelp.com.
                </label>

                <label>
                    <input type="checkbox" name="consentToListing" required />
                    We consent to the listing and use of our blood bank’s details on HariHelp.com’s platform for patient and healthcare provider referrals.
                </label>
            </div>

            <label>Signature (Key Contact):</label>
            <input type="text" name="signature" required />

            <label>Date:</label>
            <input type="date" name="date" required />

            <div className="form-buttons">
                <button type="submit">Submit</button>
                <button type="reset">Cancel</button>
            </div>
        </form>
    );
};

export default BloodBankForm;
