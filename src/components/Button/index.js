import React from "react";
import style from "./Style.module.scss";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div
      className={` ${style.container} ${style[props.fontSize]} ${
        style[props.width]
      }  ${style[props.background]}`}
    >
      <img className={style.img} src={props.img} alt={props.altImg} />
      <Link to={props.path}>{props.label}</Link>
    </div>
  );
}

export default Button;
