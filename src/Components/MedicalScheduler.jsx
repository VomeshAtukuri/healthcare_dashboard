import CalendarDay from "./Calender";
import AppointmentCard from "./AppointmentCard";
import UpcomingCard from "./Upcoming";
import {
  calendarData,
  appointments,
  upcomingSchedule,
} from "../data/appointments";
import "../Styles/Medical.css";

function MedicalScheduler() {
  return (
    <div className="medical-scheduler">
      <div className="header">
        <div className="user-avatar">👨‍⚕️</div>
        <button className="add-button">+</button>
      </div>

      <div className="calendar-header">
        <h2 className="month-year">October 2021</h2>
        <div className="nav-buttons">
          <button className="nav-button">←</button>
          <button className="nav-button">→</button>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarData.map((day, index) => (
          <CalendarDay key={index} day={day} />
        ))}
      </div>

      <div className="appointments-section">
        <div className="appointments-grid">
          {appointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </div>

      <div className="upcoming-section">
        <h3 className="section-title">The Upcoming Schedule</h3>

        <div className="day-section">
          <div className="day-title">On Thursday</div>
          <div className="upcoming-appointments">
            {upcomingSchedule.thursday.map((upcoming) => (
              <UpcomingCard key={upcoming.id} upcoming={upcoming} />
            ))}
          </div>
        </div>

        <div className="day-section">
          <div className="day-title">On Saturday</div>
          <div className="upcoming-appointments">
            {upcomingSchedule.saturday.map((upcoming) => (
              <UpcomingCard key={upcoming.id} upcoming={upcoming} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalScheduler;
