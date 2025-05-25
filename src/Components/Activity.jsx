import '../Styles/Activity.css'

const weekData = [
  {
    day: "Mon",
    bars: [
      { height: 40, color: "cyan" },
      { height: 60, color: "lightgray" },
    ],
  },
  {
    day: "Tues",
    bars: [
      { height: 80, color: "cyan" },
      { height: 100, color: "indigo" },
    ],
  },
  {
    day: "Wed",
    bars: [
      { height: 50, color: "cyan" },
      { height: 70, color: "indigo" },
    ],
  },
  {
    day: "Thurs",
    bars: [
      { height: 60, color: "cyan" },
      { height: 90, color: "indigo" },
    ],
  },
  {
    day: "Fri",
    bars: [
      { height: 100, color: "cyan" },
      { height: 80, color: "cyan" },
      { height: 40, color: "lightgray" },
    ],
  },
  {
    day: "Sat",
    bars: [
      { height: 30, color: "cyan" },
      { height: 90, color: "lightgray" },
      { height: 70, color: "indigo" },
    ],
  },
  {
    day: "Sun",
    bars: [
      { height: 60, color: "cyan" },
      { height: 50, color: "indigo" },
    ],
  },
]

export function Activity() {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <h2>Activity</h2>
        <p>3 appointment on this week</p>
      </div>

      <div className="chart-container">
        {weekData.map((dayData, index) => (
          <div key={index} className="day-column">
            <div className="bars-wrapper">
              {dayData.bars.map((bar, barIndex) => (
                <div
                  key={barIndex}
                  className="bar"
                  style={{
                    height: `${(bar.height / 100) * 64}px`,
                    backgroundColor:
                      bar.color === "cyan"
                        ? "#06b6d4"
                        : bar.color === "indigo"
                        ? "#6366f1"
                        : bar.color === "lightgray"
                        ? "#d1d5db"
                        : bar.color,
                  }}
                />
              ))}
            </div>
            <span className="day-label">{dayData.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
