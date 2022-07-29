import React from "react";
import {
  RiTelegramLine,
  RiInstagramLine,
  RiFacebookCircleLine,
} from "react-icons/ri";

function importAll(r) {
  return r.keys().map(r);
}

const buttons = importAll(
  require.context(
    "../../../assets/images/footer/buttons",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const images = importAll(
  require.context(
    "../../../assets/images/footer/images",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="app desktop">
        <div className="container">
          <div>
            <p className="title">
              Пользоваться <span style={{ color: "#27B04B" }}>yummi</span> с
              мобильным приложением стало еще проще!
            </p>
            <p className="subtitle">
              Новости и акции теперь ближе к вам через мобильное приложение.
            </p>
            <div className="buttons">
              <button>
                <img src={buttons[1]} alt="" />
              </button>
              <button>
                <img src={buttons[2]} alt="" />
              </button>
              <button>
                <img src={buttons[0]} alt="" />
              </button>
            </div>
          </div>
          <div className="images">
            <img src={images[0]} alt="" className="character" />
            <img src={images[1]} alt="" className="phone-1" />
            <img src={images[2]} alt="" className="phone-2" />
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="container">
          <div className="section-1">
            <p className="header">О компании</p>
            <ul className="links">
              <li>
                О <span style={{ color: "#27B04B" }}>yummi.uz</span>
              </li>
              <li>Новости</li>
              <li>Услуги</li>
              <li>Документы</li>
              <li>О сотрудничестве</li>
            </ul>
          </div>
          <div className="section-2">
            <p className="header">Покупателям</p>
            <ul className="links">
              <li>Как выбрать товар</li>
              <li>Оплата и доставка</li>
              <li>Обратная связь</li>
              <li>О сервисе</li>
              <li>Бонусная программа</li>
            </ul>
          </div>
          <div className="section-3">
            <p className="header">Продавцам</p>
            <ul className="links">
              <li>Личный кабинет продавца</li>
              <li>
                Продавайте на <span style={{ color: "#27B04B" }}>yummi.uz</span>
              </li>
              <li>Сертификация</li>
              <li>Документация для партнёров</li>
            </ul>
          </div>
          <div className="section-4">
            <p className="header">Подписывайтесь на нас</p>
            <p className="desc">
              Внимание! Социальные сети и вся информация, размещенная на сайте,
              защищены авторским правом!
            </p>
            <ul className="messengers">
              <li>
                <a href="#">
                  <RiFacebookCircleLine className="icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <RiInstagramLine className="icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <RiTelegramLine className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <p>Пользовательское соглашение</p>
          <p>© 2022 "Yummi mart" ООО, Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
