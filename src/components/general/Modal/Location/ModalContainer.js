import React, { useContext, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ModalContext } from "../../../../pages/main/Main";
import LocationCard from "./LocationCard";
import Modal from "../Modal";

const ModalContainer = () => {
  // modal addresses
  const { modalOpened, setModalOpened } = useContext(ModalContext);
  // radio button location checked
  const [locationChecked, setLocationChecked] = useState(false);
  // map modal
  const [mapOpened, setMapOpened] = useState(false);
  // editable map modal
  const [editMapOpened, setEditMapOpened] = useState(false);

  const openMap = () => {
    setModalOpened(false);
    setMapOpened(true);
    setEditMapOpened(false);
  };

  return (
    <div>
      <Modal
        title="Адрес доставки"
        active={mapOpened}
        mapOpened={mapOpened}
        setActive={setMapOpened}
        setAddressesModal={setModalOpened}
        size={{ width: 900, height: 526 }}
      >
        <div className="location">
          <div className="location-content">
            <p className="selected-text">Выбранное местоположение</p>
            <p className="location-text">
              72, Чиланзар-2, Чиланзарский район, Ташкент
            </p>
          </div>
          <button className="btn-primary">Доставить сюда</button>
          {editMapOpened ? (
            <button className="btn-delete">
              <RiDeleteBin6Fill />
            </button>
          ) : (
            <></>
          )}
        </div>
        <div className="map-container"></div>
      </Modal>
      <Modal
        active={modalOpened}
        setActive={setModalOpened}
        size={{ width: 700, height: 500 }}
        title="Выберите адрес доставки"
      >
        <div className="container__radio-location">
          <div>
            <LocationCard
              clickLocation={setLocationChecked}
              setEditOpen={setEditMapOpened}
              setMapOpen={setMapOpened}
              setModalAddress={setModalOpened}
            />
            <LocationCard
              clickLocation={setLocationChecked}
              setEditOpen={setEditMapOpened}
              setMapOpen={setMapOpened}
              setModalAddress={setModalOpened}
            />
            <LocationCard
              clickLocation={setLocationChecked}
              setEditOpen={setEditMapOpened}
              setMapOpen={setMapOpened}
              setModalAddress={setModalOpened}
            />
          </div>
        </div>
        <div className="selection-address">
          <button className="new-btn" onClick={openMap}>
            Добавить новый адрес
          </button>
          <button className={locationChecked ? "btn-primary" : "select-btn"}>
            Выбрать
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalContainer;
