import React from "react";
import {
  navigationLinks,
  toolsLinks,
  settingsLink
} from "../data/navigationLinks";
import "../Styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        Health<span>care.</span>
      </h2>

      <div className="nav-section">
        <p className="nav-heading">General</p>
        <ul className="nav-list">
          {navigationLinks.map((item, index) => (
            <li className="nav-item" key={index}>
              <item.icon className="nav-icon" />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-section">
        <p className="nav-heading">Tools</p>
        <ul className="nav-list">
          {toolsLinks.map((item, index) => (
            <li className="nav-item" key={index}>
              <item.icon className="nav-icon" />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-bottom">
        <ul className="nav-list">
          <li className="nav-item">
            <settingsLink.icon className="nav-icon" />
            <span>{settingsLink.name}</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
