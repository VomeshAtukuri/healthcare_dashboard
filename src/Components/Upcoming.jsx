import "../Styles/Upcoming.css";

export default function UpcomingCard({ appointment }) {
  return (
    <div className="upcomingcard">
      <div className="upcoming_title">
        <span className="upcoming-type" title={appointment.title}>
          {appointment.title}
        </span>
        <span className="upcoming-time">{appointment.icon}</span>
      </div>
      <div className="upcoming-doctor">{appointment.time}</div>
    </div>
  );
}
