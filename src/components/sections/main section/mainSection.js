import React, { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine, RiMapPin2Line } from "react-icons/ri";
import Card from "./cards/card";
import Pattern from "../../../assets/images/main section/Pattern.png";
import axios from "../../../api/axios";

// Hook
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        event.target.className === "search-link"
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const MainSection = () => {
  const ref = useRef();
  const [dropdown, setDropdown] = useState(false);
  useOnClickOutside(ref, () => setDropdown(false));
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   axios.get("/category").then((response) => {
  //     setCategories(response.data.data);
  //   });
  // }, []);

  return (
    <main className="main-section">
      <div className="search" style={{ backgroundImage: `url(${Pattern})` }}>
        <p className="title">Покупайте качественную и недорогую домашнюю еду</p>
        <div action="">
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
            <button
              className="search-link"
              onClick={() => setDropdown(!dropdown)}
            >
              Все категории
              <RiArrowDownSLine className="arrow" />
            </button>
            <div className="dropdown">
              <div
                ref={ref}
                className={`dropdown-menu ${dropdown ? "show" : ""}`}
              >
                <p>Национальная</p>
                <p>Fast Food</p>
                <p>Европейская</p>
                <p>Азиатская</p>
                <p>Напитки</p>
                <p>Кондитерская</p>
              </div>
            </div>
          </div>
        </div>
        <div className="region mobile">
          <RiMapPin2Line />
          <p className="location">Чиланзар</p>
        </div>
      </div>
      <div className="categories">
        {/* {categories.map(({ id, name, desc }) => {
          return <Card key={id} name={name} desc={desc} />;
        })} */}
        <Card name="Национальная" desc="Плов, самса, шашлык, манты и другие" />
        <Card name="Fast Food" desc="Лаваш, шаурма, бургер, хотдог и другие" />
        <Card name="Европейская" desc="Барбекю, стейк, пицца, омлет и другое" />
        <Card name="Азиатская" desc="Лагман, бешбармак, суши, кимчи и другие" />
        <Card
          name="Напитки"
          desc="Айран, мохито, компот, сок, годжа и другие"
        />
        <Card
          name="Кондитерская"
          desc="Торты, печенье, смузи, гранулы и другие"
        />
      </div>
    </main>
  );
};

export default MainSection;
