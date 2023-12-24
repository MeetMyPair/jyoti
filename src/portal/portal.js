import React from 'react';
import ReactDOM from 'react-dom';
import style from "../css/portal.module.css";
const PortalPopup = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={style.parent}>
      <div className={style.child}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default PortalPopup;
