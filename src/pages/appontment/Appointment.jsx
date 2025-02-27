import React from 'react'
import AppointmentPatientTable from '../../components/appointmentPatientTable/AppointmentPatientTable'
import ApproveAppointment from '../../components/appointmentPatientTable/ApproveAppointment'

const Appointment = () => {
  return (
    <>
      <AppointmentPatientTable/>
      <ApproveAppointment/>
    </>
  )
}

export default Appointment
