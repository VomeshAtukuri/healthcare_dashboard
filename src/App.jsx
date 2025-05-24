import Sidebar from "./Components/Sidebar";
import "./App.css";
import DashboardMainContent from "./Components/DashboardMainContent";
import MedicalScheduler from "./Components/Medical";
export default function App() {
  return (
    <div className="app-container">
      <Sidebar/>
      <DashboardMainContent/>
      <MedicalScheduler/>
    </div>
  )
}