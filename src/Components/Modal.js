import React, { useEffect, useRef } from "react";
import "./Modal.css";

function Modal({ show, onClose, title, desc, image }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">Update Required</h2>
        <div className="modal__body">
          <img className="modal__image" src={image} alt="" />
          <p>{desc}</p>
        </div>
        <button className="btn__close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
