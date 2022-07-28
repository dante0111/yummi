import React from "react";
import Card from "./cards/card";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context(
    "../../../assets/images/schedule section",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const ScheduleSection = () => {
  return (
    <div className="schedule-section">
      <p className="header">Заказ еды по времени</p>
      <div className="schedule-cards">
        <Card
          Character={images[0]}
          title="Завтрак"
          subtitle="Мы делимся настроением, а не едой по утрам  😎"
        />
        <Card
          Character={images[1]}
          title="Обед"
          subtitle="Что ты хочешь есть на работе? Мы думаем для вас  🤔"
        />
        <Card
          Character={images[2]}
          title="Ужин"
          subtitle="Не успеть приготовить ужин —
          не трагедия  😅"
        />
      </div>
    </div>
  );
};

export default ScheduleSection;
