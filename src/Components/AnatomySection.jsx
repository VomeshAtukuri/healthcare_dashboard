import React from "react";
import "../Styles/AnatomySection.css";
// import anatomyImg from "../assets/anatomy.png"; // use your placeholder

function AnatomySection() {
  return (
    <div className="anatomy-card">
      <div className="anatomy-image">
        <img src="/placeholder.svg?height=400&width=200" alt="Anatomy" />
        <div className="label top-right">❤️ Healthy Heart</div>
        <div className="label bottom-left">🦵 Healthy Leg</div>
      </div>
    </div>
  );
}

export default AnatomySection;
