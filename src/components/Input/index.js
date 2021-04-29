import React from "react";
import style from "./Input.module.scss";

function Input(props) {
  return (
    <div className={style.inputContainer}>
      <input
        className={style.input}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
