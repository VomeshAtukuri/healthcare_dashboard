import React from "react";
import "../Styles/AnatomySection.css";
import anatomyImg from "../assets/bgremove.png";

function AnatomySection() {
  return (
    <div className="anatomy-card">
      <div className="anatomy-image">
        <img src={anatomyImg} alt="Anatomy" />
        <div className="label top-right">❤️ Healthy Heart</div>
        <div className="label bottom-left">🦵 Healthy Leg</div>
      </div>
    </div>
  );
}


export default AnatomySection;
