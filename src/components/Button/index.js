import React from "react";
import style from "./Style.module.scss";

function Button(props) {
  return (
    <div
      className={` ${style.container} ${style[props.fontSize]} ${
        style[props.width]
      }  ${style[props.background]}`}
    >
      <img className={style.img} src={props.img} alt={props.altImg} />
      <a>{props.label}</a>
    </div>
  );
}

export default Button;
