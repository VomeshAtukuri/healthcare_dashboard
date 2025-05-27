import Sidebar from "./Components/Sidebar";
import "./App.css";
import DashboardMainContent from "./Components/DashboardMainContent";
import MedicalScheduler from "./Components/MedicalScheduler";

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <DashboardMainContent />
        <MedicalScheduler />
      </div>
    </div>
  );
}
