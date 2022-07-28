import React from "react";
import {
  RiHeart2Line,
  RiShoppingCartLine,
  RiPhoneLine,
  RiMenuLine,
  RiMapPin2Line,
  RiCheckboxBlankCircleFill,
  RiEmotionLine,
} from "react-icons/ri";
import Logo from "../../assets/images/general/Logo.svg";

const Navbar = () => {
  return (
    <div className="main-header">
      <div className="main__top-bar desktop">
        <div>
          <div className="">
            <div>
              <RiMapPin2Line />
            </div>
            <p>Чиланзар</p>
          </div>
          <div className="phone-link">
            <div>
              <RiPhoneLine />
            </div>
            <p>+(99890) 338-08-60</p>
          </div>
        </div>
      </div>
      <div className="main-navigation">
        <div className="main-menu">
          <div>
            <RiMenuLine className="menu-line" />
          </div>
          <p className="desktop">Категории</p>
        </div>
        <div className="main-logo">
          <a href="index.html">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="main__right-bar">
          <a href="#">
            <RiHeart2Line className="like" />
            <RiCheckboxBlankCircleFill className="like-indic" />
          </a>
          <a href="#">
            <RiShoppingCartLine className="shopping-cart" />
          </a>
          <button className="btn-secondary desktop">Войти</button>
          <a href="#" className="mobile">
            <RiEmotionLine className="emotion" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
