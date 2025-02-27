import React, { useState } from "react";
import "./AppointmentPatientTable.css";

const AppointmentPatientTable = () => {
  const [appointments, setAppointments] = useState([
    {
      AppointmentID: 1,
      PatientID: 101,
      PatientName: "John Doe",
      AppointmentDate: "2024-01-01 10:00:00",
      DoctorID: 201,
    },
    {
      AppointmentID: 2,
      PatientID: 102,
      PatientName: "Jane Smith",
      AppointmentDate: "2024-01-02 11:00:00",
      DoctorID: 202,
    },
  ]);

  const handleGetAppointment = (appointmentId) => {
    // Action for getting appointment details
    window.location.href = `/getappointment/${appointmentId}`;
  };

  return (
    <div className="appointment-table-container unique-appointment-table-container">
      <h2 className="table-heading unique-table-heading">Appointment Table</h2>
      <table className="appointment-table unique-appointment-table">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Appointment Date</th>
            <th>Doctor ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.AppointmentID}>
              <td>{appointment.AppointmentID}</td>
              <td>{appointment.PatientID}</td>
              <td>{appointment.PatientName}</td>
              <td>{appointment.AppointmentDate}</td>
              <td>{appointment.DoctorID}</td>
              <td>
                <button
                  className="get-appointment-button unique-get-appointment-button"
                  onClick={() => handleGetAppointment(appointment.AppointmentID)}
                >
                  Book Appointment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentPatientTable;
