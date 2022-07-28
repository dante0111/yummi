import React from "react";
import avatar from "../../../../assets/images/testimonials section/User_image.png";

const Card = ({name, job, comment }) => {
  return (
    <div className="testimonial-card">
      <div className="header">
        <img src={avatar} alt="" className="avatar" />
        <div className="infos">
          <p className="name">{name}</p>
          <p className="profession">{job}</p>
        </div>
      </div>
      <p className="comment">{comment}</p>
    </div>
  );
};

export default Card;
