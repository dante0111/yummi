import React from "react";
import { RiStarFill } from "react-icons/ri";

const Card = ({
  className,
  image,
  icon,
  name,
  info,
  mark,
  reviews,
  price,
  priceType,
}) => {
  return (
    <div className={`best-card ${className}`}>
      <div>
        <img src={image} alt="" className="image" />
      </div>
      <div className="name">
        {icon ? <img src={icon} alt="" /> : ""}
        <p>{name}</p>
      </div>
      <p className="info">{info}</p>
      <div className="comments">
        <p className="mark">{mark}</p>
        <ul className="stars">
          {Array.from(Array(Math.round(mark)), (e, i) => {
            return <RiStarFill key={i} className="star" />;
          })}
          {Array.from(Array(5 - Math.round(mark)), (e, i) => {
            return <RiStarFill key={i} className="star-gray" />;
          })}
        </ul>
        <p className="reviews">{reviews} отзыва</p>
      </div>
      <div className="prices">
        <p className="price">{price}</p>
        <p className="price-type">{priceType}</p>
      </div>
    </div>
  );
};

export default Card;
