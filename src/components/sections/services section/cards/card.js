import React from "react";

const Card = ({ icon, title, subtitle }) => {
  return (
    <div className="services-card">
      <img src={icon} alt="" />
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default Card;
