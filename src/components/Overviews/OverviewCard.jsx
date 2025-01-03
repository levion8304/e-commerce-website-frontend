import React from "react";

const OverviewCard = ({ title, value }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{value}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
