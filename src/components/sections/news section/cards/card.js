import React from "react";
import { RiPlayMiniLine } from "react-icons/ri";

const Card = ({ title, subtitle, playIcon }) => {
  return (
    <div className="news-card">
      <p className="title">{title}</p>
      <p className="subtitle">
        {playIcon ? <RiPlayMiniLine className="play-icon" /> : ""}
        <span>{subtitle}</span>
      </p>
    </div>
  );
};

export default Card;
