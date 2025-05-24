import React from "react";

const CalendarDay = ({ day }) => (
  <div className="calendar-day">
    <div className="day-header">{day.day}</div>
    <div className="date-number">{day.date}</div>
    <div className="time-slots">
      {day.timeSlots.map((slot, index) => (
        <div
          key={index}
          className={`time-slot ${slot.isSelected ? "selected" : slot.isBooked ? "booked" : "available"}`}
        >
          {slot.time}
        </div>
      ))}
    </div>
  </div>
);

export default CalendarDay;

