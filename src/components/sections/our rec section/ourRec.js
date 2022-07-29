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
  // const [meals, setMeals] = useState([]);

  // useEffect(() => {
  //   axios.get("/meal").then((response) => {
  //     setMeals(response.data.data);
  //   });
  // }, []);

  return (
    <section className="rec-section">
      <div className="header">
        <p className="title">Наша рекомендация</p>
        <button className="see-btn">
          <RiArrowRightSLine className="arrow" />
        </button>
      </div>
      <div className="rec-cards">
        {/* {meals
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
          )} */}
        <Card
          icon={images[2]}
          image={images[6]}
          name="Турсуной Айрончи"
          info="Айран. С различными дополнениями"
          mark={4.0}
          reviews={42}
          price="8 000"
          priceType="сум/штук"
        />
        <Card
          image={images[5]}
          name="Марям"
          info="Бешбармак с кази"
          mark={4.9}
          reviews={114}
          price="34 000"
          priceType="сум/порция"
        />
        <Card
          icon={images[0]}
          image={images[4]}
          name="Мирзо Бедил"
          info="Кусковой - Шашлык из мяса говядины"
          mark={4.8}
          reviews={94}
          price="13 000"
          priceType="сум/штук"
        />
        <Card
          icon={images[1]}
          image={images[3]}
          name="Наталя Кучкова"
          info="Омлет с мясом на завтрак"
          mark={4.2}
          reviews={61}
          price="16 000"
          priceType="сум/порция"
        />
      </div>
    </section>
  );
};

export default OurRec;
