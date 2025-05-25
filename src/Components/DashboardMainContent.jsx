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
          <option value="this">This Week</option>
          <option value="last">Last Week</option>
          <option value="custom">ustom</option>
        </select>
      </div>
      <div className="middle-section">
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <Activity />
    </main>
  );
}

export default DashboardMainContent;
