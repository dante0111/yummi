import React, { useState, useRef, useEffect, useContext } from "react";
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
import { ModalContext } from "../../pages/main/Main";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        event.target.className === "main-menu"
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

const Navbar = () => {
  const ref = useRef();
  const [dropdown, setDropdown] = useState(false);
  useOnClickOutside(ref, () => setDropdown(false));
  const { setModalOpened } = useContext(ModalContext);

  return (
    <>
      <div className="main-header">
        <div className="main__top-bar desktop">
          <div>
            <div className="location" onClick={() => setModalOpened(true)}>
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
          <div className="main-menu" onClick={() => setDropdown(!dropdown)}>
            <div>
              <RiMenuLine className="menu-line" />
            </div>
            <p className="desktop">Категории</p>
          </div>
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
    </>
  );
};

export default Navbar;
