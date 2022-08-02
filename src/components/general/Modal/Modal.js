import React from "react";
import { RiCloseFill } from "react-icons/ri";

const Modal = ({
  title,
  active,
  setActive,
  children,
  size,
  mapOpened,
  setAddressesModal,
}) => {
  const style = {
    width: size.width + "px",
    height: size.height + "px",
  };

  const closeModal = () => {
    setActive(false);
    mapOpened && setAddressesModal(true);
  };

  return (
    <div className={active ? "modal active" : "modal"} onClick={closeModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={style}
      >
        <p className="header">{title}</p>
        <button className="modal__close-btn" onClick={closeModal}>
          <RiCloseFill />
        </button>
        {children}
        {/* <Modal size={{ width: 900, height: 526 }}></Modal> */}
      </div>
    </div>
  );
};

export default Modal;
