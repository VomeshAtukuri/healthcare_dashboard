import React from "react";
import "../Styles/AnatomySection.css";
import anatomyImg from "../assets/bgremove.png";

export default function AnatomySection() {
  return (
    <div className="anatomy-card">
      <div className="anatomy-image">
        {/* <div className="placeholder-img"></div> */}
        <img src={anatomyImg} alt="Anatomy Image" />
        <div className="label top-right">❤️ Healthy Heart</div>
        <div className="label bottom-left">🦵 Healthy Leg</div>
      </div>
    </div>
  );
}

