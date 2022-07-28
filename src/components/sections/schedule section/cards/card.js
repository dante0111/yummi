import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const Card = ({ Character, title, subtitle }) => {
  return (
    <div className="schedule-card">
      <div>
        <div>
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
        <button>
          <RiArrowRightUpLine className="arrow" />
        </button>
      </div>
      <div className="character">
        <img src={Character} alt="" />
      </div>
    </div>
  );
};

export default Card;
