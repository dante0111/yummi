import React from "react";
import Card from "./cards/card";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context(
    "../../../assets/images/services section",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const Services = () => {
  return (
    <div className="services-section">
      <div className="container">
        <Card
          icon={images[2]}
          title="Гарантия качества"
          subtitle="Почти все продукты в системе имеют специальную сертификацию безопасности"
        />
        <Card
          icon={images[3]}
          title="Доставка"
          subtitle="Благодаря службе доставки теперь вы можете получать заказы из любой точки Ташкента"
        />
        <Card
          icon={images[0]}
          title="Безопасные платежи"
          subtitle={[
            "Вам не нужно беспокоиться о оплаты, ",
            <span style={{ color: "#27B04B" }}>yummi</span>,
            " обеспечивает безопасность всех платежей",
          ]}
        />
        <Card
          icon={images[1]}
          title="Премиум программа"
          subtitle="Регистрация в качестве VIP клиента гарантирует вам бонусы и продавцов с высоким рейтингом"
        />
      </div>
    </div>
  );
};

export default Services;
