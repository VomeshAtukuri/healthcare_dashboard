export const calendarData = [
  {
    date: 25,
    day: "Mon",
    timeSlots: [{ time: "10:00" }, { time: "11:00" }, { time: "12:00" }],
  },
  {
    date: 26,
    day: "Tues",
    timeSlots: [
      { time: "08:00" },
      { time: "09:00", isSelected: true },
      { time: "10:00" },
    ],
  },
  {
    date: 27,
    day: "Wed",
    timeSlots: [{ time: "12:00" }, { time: "13:00" }],
  },
  {
    date: 28,
    day: "Thurs",
    timeSlots: [{ time: "10:00" }, { time: "11:00", isBooked: true }],
  },
  {
    date: 29,
    day: "Fri",
    timeSlots: [{ time: "14:00" }, { time: "16:00" }],
  },
  {
    date: 30,
    day: "Sat",
    timeSlots: [
      { time: "12:00", isBooked: true },
      { time: "14:00" },
      { time: "15:00" },
    ],
  },
  {
    date: 31,
    day: "Sun",
    timeSlots: [{ time: "09:00" }, { time: "10:00" }, { time: "11:00" }],
  },
];

export const appointments = [
  {
    id: "1",
    type: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    color: "purple",
    icon: "🦷",
  },
  {
    id: "2",
    type: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    color: "blue",
    icon: "💪",
  },
];

export const upcomingSchedule = {
  thursday: [
    {
      id: "1",
      title: "Health checkup complete",
      time: "11:00 AM",
      icon: "💉",
    },
    {
      id: "2",
      title: "Ophthalmologist",
      time: "14:00 PM",
      icon: "👁️",
    },
  ],
  saturday: [
    {
      id: "3",
      title: "Cardiologist",
      time: "12:00 AM",
      icon: "❤️",
    },
    {
      id: "4",
      title: "Neurologist",
      time: "16:00 PM",
      icon: "🧑‍⚕️",
    },
  ],
};
