import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';  // We only need dispatch now
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import './Card.css';
import ApiCalls from '../../api/apiCalls'; // Ensure correct API import
import { setLoading } from '../../redux/features/loading/loadingSlice';
const Card = ({ IconComponent, value, label, progress, color }) => {
  return (
    <div className="card">
      <div className="circle-container">
        <div className="circle" style={{ borderColor: color }}>
          <IconComponent className="icon" style={{ color: color }} />
        </div>
        <span className="value">{value}</span>
      </div>
      <h3>{label}</h3>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: color }}></div>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const [patientCount, setPatientCount] = useState(null);
  const [doctorCount, setDoctorCount] = useState(null);
  const [appointmentCount, setAppointmentCount] = useState(null);
  const [patientMitraCount, setPatientMitraCount] = useState(null);
  const [loading, setLoading] = useState(true); // Local loading state

  const dispatch = useDispatch(); // Access dispatch from Redux

  const fetchCounts = async () => {
    setLoading(true);  // Set loading to true when fetching data

    try {
      const patientData = await ApiCalls.getPatientCount();
      const doctorData = await ApiCalls.getDoctorCount();
      const appointmentData = await ApiCalls.getAppointmentCount();
      const mitraData = await ApiCalls.getPatientMitraCount();

      if (patientData.status === 'success') {
        setPatientCount(patientData.data || '0');
      }
      if (doctorData.status === 'success') {
        setDoctorCount(doctorData.data || '0');
      }
      if (appointmentData.status === 'success') {
        setAppointmentCount(appointmentData.data || '0');
      }
      if (mitraData.status === 'success') {
        setPatientMitraCount(mitraData.data || '0');
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);  // Set loading to false once the data is fetched
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  // If still loading, show loading spinner
  if (loading) {
    return <div>Loading...</div>;
  }

  const calculateProgress = (value) => {
    const maxValue = 1000; // Adjust max value as needed
    return Math.min((value / maxValue) * 100, 100); // Returns a percentage progress
  };

  return (
    <div className="card-container">
      <Card 
        IconComponent={PersonAddIcon}  
        value={doctorCount} 
        label="Doctors" 
        progress={calculateProgress(doctorCount)} 
        color="#00d0f1"  
      />
      <Card 
        IconComponent={PeopleIcon}  
        value={patientCount} 
        label="Patients" 
        progress={calculateProgress(patientCount)} 
        color="#e84646"  
      />
      <Card 
        IconComponent={EventIcon}   
        value={appointmentCount} 
        label="Appointments" 
        progress={calculateProgress(appointmentCount)} 
        color="#7bb13c"  
      />
      <Card 
        IconComponent={HealthAndSafetyIcon}  
        value={patientMitraCount} 
        label="Patient Mitra" 
        progress={calculateProgress(patientMitraCount)} 
        color="#e91e63"  
      />
    </div>
  );
};

export default CardContainer;
