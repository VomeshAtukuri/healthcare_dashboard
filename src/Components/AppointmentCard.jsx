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
