import React, { useState, useEffect } from "react";
import Card from "./cards/card";
import { RiArrowRightSLine } from "react-icons/ri";
import axios from "../../../api/axios";
import AOS from "aos";
import "aos/dist/aos.css";

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

const BestProducts = () => {
  const [meals, setMeals] = useState([]);
  const [cardsCount, setCardsCount] = useState(null);
  const [add, setAdd] = useState(null);

  useEffect(() => {
    AOS.init();
    // axios.get("/meal").then((response) => {
    //   setMeals(response.data.data);
    // });
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setAdd(4);
      setCardsCount(8);
    } else if (window.innerWidth < 1024 && window.innerWidth > 768) {
      setCardsCount(9);
      setAdd(3);
    } else {
      setCardsCount(8);
      setAdd(2);
    }

    function handleResize() {
      if (window.innerWidth >= 1024) {
        setCardsCount(8);
        setAdd(4);
      } else if (window.innerWidth < 1024 && window.innerWidth > 768) {
        setAdd(3);
        setCardsCount(9);
      } else {
        setAdd(2);
        setCardsCount(8);
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);

  const showMore = () => {
    setCardsCount((current) => current + add);
  };

  return (
    <div className="best__pro-section">
      <div
        className="header"
        // data-aos="fade-up"
        // data-aos-offset="200"
        // data-aos-duration="400"
      >
        <p className="title">
          Лучшие продукты на <span style={{ color: "#27B04B" }}>yummi</span>
        </p>
        <button className="see-btn">
          <RiArrowRightSLine className="arrow" />
        </button>
      </div>
      <div
        className="best__pro-cards"
        // data-aos="fade-up"
        // data-aos-offset="200"
        // data-aos-duration="500"
      >
        {/* {meals
          .slice(0, cardsCount)
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
          icon={images[1]}
          image={images[3]}
          name="Malohat Batirova"
          info="Уйгурский лагман. Контейнер и хлеб бесплатно"
          mark={4.2}
          reviews={61}
          price="24 000"
          priceType="сум/порция"
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
          className="tablet"
          image={images[6]}
          name="Malohat Batirova"
          info="Уйгурский лагман. Контейнер и хлеб бесплатно"
          mark={4.2}
          reviews={88}
          price="24 000"
          priceType="сум/порция"
        />
      </div>
      <div className="more-btn">
        <button className="btn-primary" onClick={showMore}>
          Показать больше
        </button>
      </div>
    </div>
  );
};

export default BestProducts;
