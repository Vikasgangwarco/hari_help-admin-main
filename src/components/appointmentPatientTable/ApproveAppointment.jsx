import React from "react";
import "./ApproveAppointment.css";

const ApproveAppointment = () => {
  const appointments = [
    { id: 1, name: "John Doe", date: "2024-01-10", time: "10:00 AM", status: "Pending" },
    { id: 2, name: "Jane Smith", date: "2024-01-11", time: "11:30 AM", status: "Pending" },
    { id: 3, name: "Emily Johnson", date: "2024-01-12", time: "02:00 PM", status: "Pending" },
  ];

  const handleApprove = (id) => {
    console.log(`Appointment ${id} approved!`);
  };

  return (
    <div className="appointment-table">
      <h2>Approve Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.name}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>
              <td>
                <button
                  className="approve-btn"
                  onClick={() => handleApprove(appointment.id)}
                >
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveAppointment;
