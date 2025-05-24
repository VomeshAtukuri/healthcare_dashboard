import "../Styles/Activity.css";
export function Activity() {
    return (
        <div className="activity-section">
        <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
        <p>3 Activities this week</p>
        </div>
        <div className="activity-chart">
          <div className="chart-bars">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="chart-day">
                <div className="chart-bar-container">
                  <div
                    className={`chart-bar ${index % 2 === 0 ? "teal" : "purple"}`}
                    style={{ height: `${Math.random() * 70 + 30}px` }}
                  ></div>
                  <div
                    className={`chart-bar ${index % 2 === 0 ? "purple" : "teal"}`}
                    style={{ height: `${Math.random() * 50 + 20}px` }}
                  ></div>
                  <div
                    className={`chart-bar ${index % 2 === 0 ? "purple" : "teal"}`}
                    style={{ height: `${Math.random() * 50 + 20}px` }}
                  ></div>
                </div>
                <div className="chart-day-label">{["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"][index]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}