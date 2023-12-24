import React from 'react';
import style from "../css/button.module.css";

const SimpleButton = ({ onClick, label }) => {
  return <>
    <button onClick={onClick}>
      {label}
    </button>
    <h2 className={style.hello}>Button One</h2>
  </>
};

export default SimpleButton;