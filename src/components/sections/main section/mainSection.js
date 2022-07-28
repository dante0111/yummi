import React, { useState, useEffect } from "react";
import { RiArrowDownSLine, RiMapPin2Line } from "react-icons/ri";
import Card from "./cards/card";
import Pattern from "../../../assets/images/main section/Pattern.png";
import axios from "../../../api/axios";

const MainSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("/category").then((response) => {
      setCategories(response.data.data);
    });
  }, []);

  return (
    <div className="main-section">
      <div className="search" style={{ backgroundImage: `url(${Pattern})` }}>
        <p className="title">Покупайте качественную и недорогую домашнюю еду</p>
        <form action="#">
          <input
            type="text"
            placeholder="Поиск еды по категориям"
            className="search-bar large"
          />
          <input
            type="text"
            placeholder="Поиск еды"
            className="search-bar small"
          />
          <div className="desktop">
            <p className="search-link">
              Все категории
              <RiArrowDownSLine className="arrow" />
            </p>
          </div>
        </form>
        <div className="region mobile">
          <RiMapPin2Line />
          <p className="location">Чиланзар</p>
        </div>
      </div>
      <div className="categories">
        {categories.map(({ id, name, desc }) => {
          return <Card key={id} name={name} desc={desc} />;
        })}
      </div>
    </div>
  );
};

export default MainSection;
