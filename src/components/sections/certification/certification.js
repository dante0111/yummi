import React from "react";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context(
    "../../../assets/images/certification",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const Certification = () => {
  return (
    <section className="certification-section">
      <div className="container">
        <p className="title">Сертификация и рейтинговые знаки</p>
        <p className="subtitle">
          <span style={{ color: "#27B04B" }}>yummi</span> предоставляет систему
          рейтинга для продавцов. Каждому сертифицированному продавцу в сервисе
          выставляются рейтинговые оценки, основанные на результатах его работы.
          Чем выше рейтинг продавца, тем больше он сможет увеличить свой оборот.
        </p>
        <p className="competition-text">
          Мы всегда стремимся к честной конкуренции
        </p>
        <div className="badges">
          <img src={images[0]} alt="" />
          <img src={images[1]} alt="" />
          <img src={images[2]} alt="" />
        </div>
        <div className="desktop">
          <div className="characters-container">
            <div className="characters">
              <img src={images[3]} alt="" />
              <img src={images[4]} alt="" />
            </div>
          </div>
        </div>
        <div className="more-btn">
          <button className="btn-primary">
            Оставьте заявку на сертификацию
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certification;
