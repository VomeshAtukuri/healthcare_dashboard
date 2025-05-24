import Sidebar from "./Components/Sidebar";
import "./App.css";
import DashboardMainContent from "./Components/DashboardMainContent";
import ActivitySide from "./Components/ActivitySide";
export default function App() {
  return (
    <div className="app-container">
      <Sidebar/>
      <DashboardMainContent/>
      {/* <DashboardMiddle/> */}
      <ActivitySide/>
    </div>
  )
}