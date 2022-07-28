import React, { useState, useEffect } from "react";
import Card from "../our rec section/cards/card";
import { RiArrowRightSLine } from "react-icons/ri";
import axios from "../../../api/axios";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context(
    "../../../assets/images/user rec section",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const UsersRec = () => {
  // const [meals, setMeals] = useState([]);

  // useEffect(() => {
  //   axios.get("/meal").then((response) => {
  //     setMeals(response.data.data);
  //     console.log(response);
  //   });
  // }, []);

  return (
    <div className="rec-section">
      <div className="header">
        <p className="title">Выбор покупателей</p>
        <button className="see-btn">
          {" "}
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
          image={images[4]}
          name="Bekzod Eshnazarov"
          info="Слоеная хрустящая Самса  с мясом"
          mark={4.0}
          reviews={42}
          price="6 000"
          priceType="сум/штук"
        />
        <Card
          image={images[5]}
          name="Мирзо Бедил"
          info='Узбекская самса "Капля" с мясом'
          mark={4.9}
          reviews={114}
          price="7 000"
          priceType="сум/штук"
        />
        <Card
          icon={images[0]}
          image={images[6]}
          name="Аиша Бека"
          info="Плов, хлеб, салат и чай. Все в одном"
          mark={4.8}
          reviews={94}
          price="28 000"
          priceType="сум/порция"
        />
        <Card
          icon={images[1]}
          image={images[3]}
          name="Malohat Batirova"
          info="Уйгурский лагман. Контейнер и хлеб бесплатно"
          mark={4.2}
          reviews={61}
          price="24 000"
          priceType="сум/порция"
        />
      </div>
    </div>
  );
};

export default UsersRec;
