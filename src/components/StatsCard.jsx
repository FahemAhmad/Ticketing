import React from "react";
import "../pages/Dashboard/Dashboard.css";

const StatsCard = ({ title, counter }) => {
  return (
    <div className="stats-card-container">
      <p className="subtitle">{title}</p>
      <h2 className="counter">{counter}</h2>
    </div>
  );
};

export default StatsCard;
