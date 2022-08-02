import React, { useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";

const LocationCard = ({
  clickLocation,
  setEditOpen,
  setMapOpen,
  setModalAddress,
}) => {
  const [hoverLocation, setHoverLocation] = useState();
  const openMap = () => {
    setEditOpen(true);
    setMapOpen(true);
    setModalAddress(false);
  };
  return (
    <div>
      <label
        className="form-control"
        onMouseEnter={() => setHoverLocation(true)}
        onMouseLeave={() => setHoverLocation(false)}
      >
        <input
          type="radio"
          name="fav_language"
          value="HTML"
          onChange={() => clickLocation(true)}
        ></input>
        <div className="custom-radio">
          <button
            className={`edit-btn ${hoverLocation ? "show-edit" : ""}`}
            onClick={openMap}
          >
            <RiEdit2Fill />
          </button>
          <p className="title">Чиланзар</p>
          <p className="subtitle">
            72, Чиланзар-2, Чиланзарский район, Ташкент
          </p>
        </div>
      </label>
    </div>
  );
};

export default LocationCard;
