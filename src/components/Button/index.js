import React from "react";
import style from "./Style.module.scss";

function Button(props) {
  console.log(props);
  return (
    <div
      className={`${style[props.fontSize]} ${style[props.width]}  ${
        style[props.background]
      } ${style.container}`}
    >
      <img className={style.img} src={props.img} alt={props.altImg} />
      <a>{props.label}</a>
    </div>
  );
}

export default Button;
