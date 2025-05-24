import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import "../Styles/DashboardMainContent.css";
import { Input } from "./Input";
import { Activity } from "./Activity";
function DashboardMainContent() {
  return (
    <main className="dashboard-main">
      <Input />
      <div className="top-section">
        <h2>Dashboard</h2>
        <select className="dropdown">
          <option value="this">this week</option>
          <option value="last">last week</option>
          <option value="custom">custom</option>
        </select>
      </div>
      <div className="middle-section">
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <div className="bottom-section">
        <Activity />
      </div>
    </main>
  );
}

export default DashboardMainContent;
