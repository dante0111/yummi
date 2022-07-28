import React from "react";
import Card from "./cards/card";

const NewsSection = () => {
  return (
    <div className="news-section">
      <p className="header">Акции и новости</p>
      <div className="news-cards">
        <Card
          title="С праздником Курбан
хайит!"
          subtitle="Смотреть ролик"
          playIcon={true}
        />
        <Card
          title="Yoz — o'tmoqda soz"
          subtitle="Скидка до 50% на детское питание во время летних каникул"
          playIcon={false}
        />
        <Card
          title="Праздник Новруз со сладостями"
          subtitle="Акции на сладости 19-24 марта"
          playIcon={false}
        />
        <Card title="С 2022 годом!" subtitle="Смотреть ролик" playIcon={true} />
      </div>
    </div>
  );
};

export default NewsSection;
