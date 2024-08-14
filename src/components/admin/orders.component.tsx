import React from 'react'

const Appointments = () => {
  return (
    <div>
      <h2>Appointments</h2>
      {/* Add functionality to list, add, edit, and delete appointments */}
    </div>
  )
}

export default Appointments


// import React, { useState, useEffect } from 'react'
// import { getAppointments } from '../../api'

// const Appointments = () => {
//   const [appointments, setAppointments] = useState([])

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       const response = await getAppointments()
//       setAppointments(response.data)
//     }
//     fetchAppointments()
//   }, [])

//   return (
//     <div>
//       <h2>Appointments</h2>
//       <ul>
//         {appointments.map(appointment => (
//           <li key={appointment._id}>{appointment.date} - {appointment.time} with {appointment.name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Appointments
