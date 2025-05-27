import "../Styles/Upcoming.css";

export default function UpcomingCard({ upcoming }) {
  return (
    <div className="upcomingcard">
      <div className="upcoming_title">
        <span className="upcoming-type" title={upcoming.title}>
          {upcoming.title}
        </span>
        <span className="upcoming-time">{upcoming.icon}</span>
      </div>
      <div className="upcoming-doctor">{upcoming.time}</div>
    </div>
  );
}
