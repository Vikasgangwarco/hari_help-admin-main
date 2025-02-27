// apiEndPoints.js

export const LOGIN = 'panel/authentication/login';  // Endpoint for user login
export const LOGOUT = 'panel/authentication/logout';  // Endpoint for user logout

export const PATIENT_CREATE = 'panel/patient_create';  // Endpoint for patient creation
export const PATIENT_LIST = 'panel/patients';  // Endpoint for fetching the list of patients
export const PATIENT_DETAILS = 'panel/patient/:id';  // Endpoint for fetching details of a single patient by ID
export const PATIENT_UPDATE = 'panel/patient_edit/:id';  // for updating a patient
export const PATIENT_DELETE = 'panel/patient_delete/:id'; // for deleting a patient


//Doctors Api 

export const DOCTOR_CREATE = 'panel/doctor_create';  // Endpoint for doctor creation
export const DOCTOR_LIST = 'panel/doctors';  // Endpoint for fetching the list of doctors
export const SINGLE_DOCTOR='panel/doctor';
export const DOCTOR_EDIT ='panel/doctor_edit';
export const DOCTOR_DELETE ='panel/doctor_delete'



//Dashboard Count API

export const PATIENT_COUNT ='panel/patient_count' //Endpoint for Patient_Count
export const DOCTOR_COUNT ='panel/doctor_count' //Endpoint for Doctor_Count
export const APPOINTMENT_COUNT ='panel/appointments_count' //Endpoint for Appointment_count
export const PATIENT_MITRA_COUNT ='panel/patient_mitra_count' // Endpoint for Appointment_count


//Hospital Api


export const HOSPITAL_CREATE = 'panel/hospital_create';  // Endpoint for hospital creation
export const HOSPITAL_LIST = 'panel/hospitals';  // Endpoint for fetching the list of hospitals'


//Search Api

export const SEARCH_DATA = 'panel/search/:pattern';  // Endpoint for search data'

// Patient_Mitra Api

export const PATIENT_MITRA_CREATE = 'panel/patient_mitra_create';  // Endpoint for hospital creation'
export const PATIENT_MITRA_LIST = 'panel/patient_mitras';  // Endpoint for fetching the list of doctors
export const SINGLE_PATIENT_MITRA ='panel/patient_mitra';
export const PATIENT_MITRA_EDIT ='panel/patient_mitra_edit';
export const PATIENT_MITRA_DELETE ='panel/patient_mitra_delete'


//Dashboard Appointment show Api

export const SHOW_APPOINTMENT ='panel/appointments' //Endpoint for Show Appoinment


// Clinics Api

export const CLINIC_CREATE = 'panel/clinic_create';  // Endpoint for hospital creation'
export const CLINIC_LIST = 'panel/clinics';  // Endpoint for fetching the list of clinics
export const SINGLE_CLINIC ='panel/clinic';     //Endpoint for fetching the list of signle clinic
export const CLINIC_EDIT ='panel/clinic_edit';  //Endpoint for fetching the list of edit clinic
export const CLINIC_DELETE ='panel/clinic_delete'  //Endpoint for fetching the list of delete clinic