import { Search, Bell } from "lucide-react"
import "../Styles/Input.css"

export function Input() {
  return (
    <div className="inputContainer">
      <Search className="icon" style={{ left: "10px" }} />
      <input type="text" placeholder="Search..." className="searchBar" />
      <Bell className="icon" style={{ right: "10px" }} fill="#3630a6"/>
    </div>
  )
}
