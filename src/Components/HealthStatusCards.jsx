import React from "react";
import { healthStatuses } from "../data/healthData";
import "../Styles/HealthStatusCards.css";

function HealthStatusCards() {
  return (
    <div className="health-cards">
      {healthStatuses.map((item, index) => (
        <div className="health-card" key={index}>
          <div className="icon-title">
            <span className="emoji">
              {item.title === "Lungs" && "🫁"}
              {item.title === "Teeth" && "🦷"}
              {item.title === "Bone" && "🦴"}
            </span>
            <span>{item.title}</span>
          </div>
          <p className="date">Date: {item.date}</p>
          <div className="status-bar">
            <div
              className="status-fill"
              style={{ background: item.color, width: "70%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
