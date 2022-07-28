import React from "react";

const Card = ({ name, desc }) => {
  return (
    <div className="category-card">
      <p className="title">{name}</p>
      <p className="subtitle desktop">{desc}</p>
    </div>
  );
};

export default Card;
