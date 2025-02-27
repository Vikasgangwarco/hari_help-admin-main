import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/features/loading/loadingSlice"; // Adjust the import path
import { hitShowAppointment } from "../../redux/features/appointment/showAppointment"; // Adjust the import path
import "./Table.css";

// Importing doctor and patient images
import doctor1 from "../../assets/img/doctors/doctor-thumb-01.jpg";
import patient1 from "../../assets/img/patients/patient1.jpg";

const List = () => {
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);

  const fetchAppointments = async () => {
    console.log("🔍 [fetchAppointments] - Starting function");
    dispatch(setLoading(true));

    try {
      const response = await hitShowAppointment();
      console.log("📥 [API Response] - Raw response:", response);

      if (response && response.data) {
        console.log("✅ [API Response Data] - ", response.data);

        const formattedRows = response.data.map((appointment, index) => {
          console.log(`📝 [Processing Appointment ${index + 1}] - `, appointment);

          const doctor = appointment.doctors[0] || {};
          const patient = appointment.patients[0] || {};

          return {
            id: appointment._id,
            doctorName: doctor.fullName || "No Doctor Assigned",
            patientName: patient.fullName || "No Patient Assigned",
            appointmentTime: appointment.appointment_time,
            appointmentDate: appointment.appointment_approve_date || "Not Set",
            amount: appointment.appointment_payment,
            status: appointment.status,
            doctorImage: doctor.image || doctor1,
            patientImage: patient.image || patient1,
          };
        });

        console.log("📋 [Formatted Rows] - ", formattedRows);
        setRows(formattedRows);
      } else {
        console.log("⚠️ [API Response] - No data found in response.");
      }
    } catch (error) {
      console.error("❌ [Error] - Fetching appointments failed:", error);
    } finally {
      dispatch(setLoading(false));
      console.log("🔚 [fetchAppointments] - Finished function");
    }
  };

  useEffect(() => {
    console.log("🚀 [Component Mounted] - Fetching appointments...");
    fetchAppointments();
  }, []);

  console.log("📊 [Rows State] - Current rows before render:", rows);

  return (
    <div className="appointment-list">
      <div className="table-container">
        <h3 className="appointment-title">Appointments List</h3>
        <table className="simple-table">
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Patient Name</th>
              <th>Appo.Time</th>
              <th>Appo.Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <div className="cellWrapper">
                      <img
                        src={row.doctorImage}
                        alt={row.doctorName}
                        className="image"
                      />
                      {row.doctorName}
                    </div>
                  </td>
                  <td>
                    <div className="cellWrapper">
                      <img
                        src={row.patientImage}
                        alt={row.patientName}
                        className="image"
                      />
                      {row.patientName}
                    </div>
                  </td>
                  <td>{row.appointmentTime}</td>
                  <td>{row.appointmentDate}</td>
                  <td>{row.amount}</td>
                  <td>
                    <span className={`status ${row.status.toLowerCase()}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-appointments">
                  No appointments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
