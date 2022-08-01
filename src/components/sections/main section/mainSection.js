import React, { useState, useEffect, useRef, useReducer } from "react";
import {
  RiArrowDownSLine,
  RiMapPin2Line,
  RiCloseFill,
  RiArrowLeftSLine,
} from "react-icons/ri";
import Card from "./cards/card";
import Pattern from "../../../assets/images/main section/Pattern.png";
import data from "../../dataFood/data.json";

// Hook
function useOnClickOutside(ref, handler, targetEl) {
  useEffect(() => {
    const listener = (event) => {
      for (let el of [...targetEl]) {
        console.log(event.target.classList.contains(el));
        if (event.target.classList.contains(el)) return;
      }
      console.log(ref);
      if (!ref.current || ref.current.contains(event.target)) {
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
  }, [ref, handler, targetEl]);
}

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    };

    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return keyPressed;
};

const initialState = { selectedIndex: 0 };

const MainSection = () => {
  const refCategory = useRef();
  const refInput = useRef();
  const refTextInput = useRef();
  const refTextInputMobile = useRef();
  const [dropdownCategory, setDropdownCategory] = useState(false);
  const [dropdownInput, setDropdownInput] = useState(false);
  const [closeBtn, setCloseBtn] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [historyFoodsCount, setHistoryFoodsCount] = useState(0);
  const categories = [
    "Все категории",
    "Национальная",
    "Fast Food",
    "Европейская",
    "Азиатская",
    "Напитки",
    "Кондитерская",
    "Завтрак",
    "Обед",
    "Ужин",
  ];
  const [catedoryText, setCategoryText] = useState("Все категории");

  const reducer = (state, action) => {
    switch (action.type) {
      case "arrowUp":
        return filteredData.length > 0
          ? {
              selectedIndex:
                state.selectedIndex !== 0
                  ? state.selectedIndex - 1
                  : filteredData.length - 1,
            }
          : { selectedIndex: -1 };
      case "arrowDown":
        return filteredData.length > 0
          ? {
              selectedIndex:
                state.selectedIndex !== filteredData.length - 1
                  ? state.selectedIndex + 1
                  : 0,
            }
          : { selectedIndex: -1 };
      case "select":
        return { selectedIndex: action.payload };
      default:
        throw new Error();
    }
  };

  const arrowUpPressed = useKeyPress("ArrowUp");
  const arrowDownPressed = useKeyPress("ArrowDown");
  const [state, dispatch] = useReducer(reducer, initialState);

  useOnClickOutside(refCategory, () => setDropdownCategory(false), [
    "search-link",
  ]);

  useOnClickOutside(refInput, () => setDropdownInput(false), [
    "search-bar",
    "close-btn",
  ]);

  const handleInput = (e) => {
    dispatch({ type: "select", payload: -1 });
    if (e.target.value.length === 0) {
      setCloseBtn(false);
    } else setCloseBtn(true);
    const searchWord = e.target.value;
    setFilteredFoods(searchWord);
    !dropdownInput && setDropdownInput(true);
  };

  const setFilteredFoods = (searchWord) => {
    let newFilter = [];
    if (searchWord.length !== 0) {
      newFilter = data
        .map((food) => food.name)
        .filter((value) => {
          return value.toLowerCase().includes(searchWord.toLowerCase());
        });
    }
    const history =
      JSON.parse(localStorage.getItem("historyFoods")) &&
      JSON.parse(localStorage.getItem("historyFoods"));
    let items;
    if (newFilter.length > 5) {
      items = newFilter.slice(0, 5);
    } else {
      items = newFilter;
    }
    if (history) {
      setHistoryFoodsCount(history.length);
      items.push(...history);
    }
    setFilteredData(items);
  };

  const clearInput = () => {
    dispatch({ type: "select", payload: -1 });
    refTextInput.current.value = "";
    refTextInput.current.focus();
    setCloseBtn(false);
    setFilteredFoods("");
  };

  useEffect(() => {
    if (arrowUpPressed) {
      dispatch({ type: "arrowUp" });
      setIsHovering(false);
      if (filteredData.length !== 0) setCloseBtn(true);
    }
  }, [arrowUpPressed, filteredData]);

  useEffect(() => {
    if (arrowDownPressed) {
      setIsHovering(false);
      dispatch({ type: "arrowDown" });
      if (filteredData.length !== 0) setCloseBtn(true);
    }
  }, [arrowDownPressed, filteredData]);

  useEffect(() => {
    if (
      state.selectedIndex !== -1 &&
      !isHovering &&
      filteredData.length !== 0
    ) {
      refTextInput.current.value = [...filteredData][state.selectedIndex];
      console.log(refTextInput.current.value);
    }
  }, [state, filteredData, isHovering]);

  const handleMouseOver = (key) => {
    setIsHovering(true);
    dispatch({ type: "select", payload: key });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    dispatch({ type: "select", payload: -1 });
  };

  const setCategory = (value) => {
    setCategoryText(value);
    setDropdownCategory(false);
  };

  const setSearch = (value) => {
    if (value) {
      setHistoryItem(value);
      refTextInput.current.value = value;
      setDropdownInput(false);
    }
  };

  const setHistoryItem = (value) => {
    let history = [];
    JSON.parse(localStorage.getItem("historyFoods")) &&
      (history = JSON.parse(localStorage.getItem("historyFoods")));
    if (value !== "") {
      if (!history.includes(value)) {
        history.unshift(value);
        if (history.length > 5) {
          history.splice(5);
        }
      } else {
        const index = history.indexOf(value);
        history.splice(index, 1);
        history.unshift(value);
      }
      localStorage.setItem("historyFoods", JSON.stringify(history));
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setSearch(refTextInput.current.value);
    }
    if (e.key === "Escape") {
      setDropdownInput(false);
      refTextInput.current.blur();
    }
  };

  const [mobileSearchOpened, setMobileSearchOpened] = useState(false);
  const [dropdownInputMobile, setDropdownInputMobile] = useState(false);
  const [closeBtnMobile, setCloseBtnMobile] = useState(false);

  const openMobileSearch = () => {
    setMobileSearchOpened(true);
    refTextInputMobile.current.focus();
    refTextInput.current.value = "";
  };

  const closeMobileSearch = () => {
    setMobileSearchOpened(false);
    setDropdownInputMobile(false);
    refTextInputMobile.current.value = "";
  };

  const handleInputMobile = (e) => {
    dispatch({ type: "select", payload: -1 });
    if (e.target.value.length === 0) {
      setCloseBtnMobile(false);
    } else setCloseBtnMobile(true);
    const searchWord = e.target.value;
    setFilteredFoods(searchWord);
    !dropdownInputMobile && setDropdownInputMobile(true);
  };

  const setSearchMobile = (value) => {
    setHistoryItem(value);
    refTextInputMobile.current.value = value;
    setDropdownInput(false);
    setDropdownInputMobile(false);
    setCloseBtnMobile(true);
  };

  const clearInputMobile = () => {
    dispatch({ type: "select", payload: -1 });
    refTextInputMobile.current.value = "";
    refTextInputMobile.current.focus();
    setCloseBtnMobile(false);
    setFilteredFoods("");
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileSearchOpened(false);
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <main className="main-section">
      <div className="search" style={{ backgroundImage: `url(${Pattern})` }}>
        <p className="title">Покупайте качественную и недорогую домашнюю еду</p>
        <div className="search-container">
          <input
            ref={refTextInput}
            type="text"
            placeholder="Поиск еды по категориям"
            className="search-bar large"
            onChange={handleInput}
            onFocus={handleInput}
            onKeyDown={handleEnter}
            onClick={handleInput}
          />
          <input
            type="text"
            placeholder="Поиск еды"
            className="search-bar small"
            onClick={openMobileSearch}
          />
          <div className="desktop">
            <div>
              <div
                className={`close-btn ${
                  closeBtn ? "close-show" : "close-hide"
                }`}
                onClick={clearInput}
              >
                <RiCloseFill />
              </div>
              <button
                className="search-link"
                onClick={() => setDropdownCategory(!dropdownCategory)}
              >
                {catedoryText}
                <RiArrowDownSLine className="arrow" />
              </button>
            </div>
          </div>
          <div className="dropdown-input" ref={refInput}>
            <div className={`dropdown-menu ${dropdownInput ? "show" : ""}`}>
              <div className="filtered-data">
                {filteredData.length - historyFoodsCount > 0 ? (
                  filteredData
                    .slice(0, filteredData.length - historyFoodsCount)
                    .map((value, key) => {
                      return (
                        <p
                          key={key}
                          className="text"
                          onClick={() => setSearch(value)}
                          onMouseLeave={handleMouseLeave}
                          onMouseEnter={() => handleMouseOver(key)}
                          style={{
                            backgroundColor:
                              key === state.selectedIndex
                                ? "#F9FAFB"
                                : "#ffffff",
                          }}
                        >
                          {value}
                        </p>
                      );
                    })
                ) : (
                  <p className="empty">Ничего не найдено</p>
                )}
              </div>
              <div className="line" />
              <p className="history-header">История поиска</p>
              {historyFoodsCount ? (
                filteredData.slice(-historyFoodsCount).map((food, key) => {
                  return (
                    <p
                      key={key + filteredData.length - historyFoodsCount}
                      className="text"
                      onClick={() => setSearch(food)}
                      onMouseLeave={handleMouseLeave}
                      onMouseEnter={() =>
                        handleMouseOver(
                          key + filteredData.length - historyFoodsCount
                        )
                      }
                      style={{
                        backgroundColor:
                          key + filteredData.length - historyFoodsCount ===
                          state.selectedIndex
                            ? "#F9FAFB"
                            : "#ffffff",
                      }}
                    >
                      {food}
                    </p>
                  );
                })
              ) : (
                <p className="empty">Нет истории поиска</p>
              )}
            </div>
          </div>
          <div className="dropdown-category" ref={refCategory}>
            <div className={`dropdown-menu ${dropdownCategory ? "show" : ""}`}>
              {categories.slice(0, 7).map((category) => {
                return <p onClick={() => setCategory(category)}>{category}</p>;
              })}
              <div className="line" />
              {categories.slice(-3).map((category) => {
                return <p onClick={() => setCategory(category)}>{category}</p>;
              })}
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
      {/* Mobile search input */}
      <div
        className={`mobile-search-window ${
          mobileSearchOpened ? "mobile-s-show" : "mobile-s-hide"
        }`}
      >
        <div>
          <div className="exit-btn" onClick={closeMobileSearch}>
            <RiArrowLeftSLine />
          </div>
          <input
            ref={refTextInputMobile}
            type="text"
            placeholder="Напиши что-нибудь"
            className="mobile-search-input"
            onChange={handleInputMobile}
            onFocus={handleInputMobile}
            onKeyDown={handleInputMobile}
            onClick={handleInputMobile}
          />
          <div
            className={`close-btn ${
              closeBtnMobile ? "close-show" : "close-hide"
            }`}
            onClick={clearInputMobile}
          >
            <RiCloseFill />
          </div>
          <button className="btn-primary">Найти</button>
        </div>
        <div className="line" />
        <div className="dropdown-input-mobile">
          <div
            className={`dropdown-menu-mobile ${
              dropdownInputMobile ? "show" : ""
            }`}
          >
            <div className="filtered-data">
              {filteredData.length - historyFoodsCount > 0 ? (
                filteredData
                  .slice(0, filteredData.length - historyFoodsCount)
                  .map((value, key) => {
                    return (
                      <p
                        key={key}
                        className="text"
                        onClick={() => setSearchMobile(value)}
                      >
                        {value}
                      </p>
                    );
                  })
              ) : (
                <p className="empty">Ничего не найдено</p>
              )}
            </div>
            <p className="history-header">История поиска</p>
            {historyFoodsCount ? (
              filteredData.slice(-historyFoodsCount).map((food, key) => {
                return (
                  <p
                    key={key}
                    className="text"
                    onClick={() => setSearchMobile(food)}
                  >
                    {food}
                  </p>
                );
              })
            ) : (
              <p className="empty">Нет истории поиска</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
