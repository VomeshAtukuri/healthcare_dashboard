
// import "../Styles/AppointmentCard.css"
// function AppointmentCard({ appointment }){
//   return (
//     <div className={`appointment-card ${appointment.color}`}>
//       <div className="appointment-type">
//         <span className="appointment-type" title={appointment.title}>
//           {appointment.title}
//         </span>
//         {appointment.icon && <span>{appointment.icon}</span>}
//       </div>
//       <div className="appointment-time">{appointment.time}</div>
//       <div className="appointment-doctor">{appointment.doctor}</div>
//     </div>
//   )
// }

import "../Styles/AppointmentCard.css";

export default function AppointmentCard({ appointment }) {
  return (
    <div className={ `appointment-card ${appointment.color}`}>
      <div className="appointment_title">
        <span className="appointment-type" title={appointment.type}>
          {appointment.type}
        </span>
        <span className="appointment-time">{appointment.icon}</span>
      </div>
      <div className="appointment-doctor">{appointment.time}</div>
      <div className="appointment-doctor">{appointment.doctor}</div>
    </div>
  );
}
