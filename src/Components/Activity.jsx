import '../Styles/Activity.css'
import { weekData } from '../data/activity'
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
