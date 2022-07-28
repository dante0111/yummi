import React, { useState, useEffect } from "react";
import Card from "./cards/card";
import { RiArrowRightSLine } from "react-icons/ri";
import axios from "../../../api/axios";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context(
    "../../../assets/images/our rec section",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const OurRec = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get("/meal").then((response) => {
      setMeals(response.data.data);
    });
  }, []);

  return (
    <div className="rec-section">
      <div className="header">
        <p className="title">Наша рекомендация</p>
        <button className="see-btn">
          <RiArrowRightSLine className="arrow" />
        </button>
      </div>
      <div className="rec-cards">
        {meals
          .slice(0, 4)
          .map(
            ({
              id,
              nameCook,
              desc,
              rate,
              comments,
              imageUrl,
              price,
              priceType,
            }) => {
              return (
                <Card
                  key={id}
                  image={imageUrl}
                  name={nameCook}
                  info={desc}
                  mark={rate}
                  reviews={comments}
                  price={price}
                  priceType={"сум/".concat(priceType)}
                />
              );
            }
          )}
      </div>
    </div>
  );
};

export default OurRec;
