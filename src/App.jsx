import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import HomePage from './pages/home/HomePage';
import PatientPage from './pages/patient/PatientPage';
import LoginPage from './pages/login/LoginPage';
import PathologyPage from './pages/pathology/PathologyPage';
import PhysiotherapyPage from './pages/physiotherapy/PhysiotherapyPage';
import DialysisPage from './pages/dialysis/DialysisPage';
import StaffPage from './pages/staff/StaffPage';
import DoctorsPage from './pages/doctors/DoctorsPage';
import ClinicPage from './pages/clinic/ClinicPage';
import PatientMitraPage from './pages/patientMitra/PatientMitraPage';
import BloodBankPage from './pages/bloodbank/BloodBankPage';
import HospitalsPage from './pages/hospital/HospitalPage';
import LogoutPage from './pages/logout/Logout';
import Appointment from './pages/appontment/Appointment';
import PatientDetailPage from './pages/patient/PatientDetailPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setLoading } from './redux/features/loading/loadingSlice';
import GlobalLoader from './components/globalLoader/GlobalLoader';
import ToastMessage from './components/toast/ToastMessage';
import Pharmacy from './pages/pharmacy/Pharmacy';
import Reports from './pages/reports/Reports';
import Medicines from './pages/medicines/Medicines';
import DoctorDetailPage from './pages/doctors/DoctorDetailPage';
import PatientMitraDetailPage from './pages/patientMitra/PatientMitraDetailPage';
import ClinicDetailPage from './pages/clinic/ClinicDetailPage';


function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const dispatch = useDispatch();

  const toggleSidebar = () => setCollapsed(!collapsed);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem('isLoggedIn', status);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const fetchData = async () => {
    try {
      dispatch(setLoading(true));
      await new Promise((resolve) => setTimeout(resolve, 3000));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="app">
      <ToastContainer />
      <GlobalLoader />

      {isLoggedIn ? (
        <>
          <Navbar toggleSidebar={toggleSidebar} />
          <div className={`layout ${collapsed ? 'collapsed' : ''}`}>
            <Sidebar collapsed={collapsed} />
            <div className="content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/patients" element={<PatientPage />} />
                <Route path="/appointments" element={<Appointment />} />
                <Route path="/pharmacy" element={<Pharmacy />} />
                <Route path="/medicines" element={<Medicines />} />

                <Route path="/hospitals" element={<HospitalsPage />} />
                <Route path="/doctors" element={<DoctorsPage />} />
                <Route path="/clinic" element={<ClinicPage />} />
                <Route path="/patientmitra" element={<PatientMitraPage />} />
                <Route path="/pathology" element={<PathologyPage />} />
                <Route path="/blood-bank" element={<BloodBankPage />} />
                <Route path="/reports" element={<Reports />} />

                <Route path="/physiotherapy" element={<PhysiotherapyPage />} />
                <Route path="/dialysis" element={<DialysisPage />} />
                <Route path="/staff" element={<StaffPage />} />
                <Route path="/logout" element={<LogoutPage handleLogout={handleLogout} />} />

                {/* Routes for Patient Detail and Edit Patient */}
                <Route path="/patient/:patientId" element={<PatientDetailPage />} />
                 <Route path="/doctor/:doctorId" element={<DoctorDetailPage />} />
                 <Route path="/patientmitra/:patientmitraId" element={<PatientMitraDetailPage />} />
                 <Route path="/patientmitra/patientmitra_edit/:patientmitraId" element={<PatientMitraDetailPage />} />

                  <Route path="/doctor/doctor_edit/:doctorId" element={<DoctorDetailPage />} />
                <Route path="/patient/patient_edit/:patientId" element={<PatientDetailPage />} />
                <Route path="/clinic/clinic_edit/:clinicId" element={<ClinicDetailPage />} />
                <Route path="/clinic/:clinicId" element={<ClinicDetailPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
      <ToastMessage />
    </div>
  );
}

export default App;
