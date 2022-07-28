import React from "react";

const AdsSection = ({
  image,
  title,
  subtitle,
  gradient,
  bgColor,
  textColor,
}) => {
  const style = {
    background: gradient,
    backgroundColor: bgColor,
  };

  return (
    <div className="ads-section">
      <div className="container" style={style}>
        <div style={{ color: textColor }}>
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default AdsSection;
