import React, { useState } from "react";
import style from "./Style.module.scss";
import { Link } from "react-router-dom";

import BurgerMenu from "../BurgerMenu";

function Button(props) {
  const [open, setOpen] = useState(false);

  function handleMenu() {
    console.log("click");
    setOpen((prevState) => !prevState);
  }

  console.log(open);
  return (
    <>
      {props.label === "menu" && (
        <BurgerMenu onClick={handleMenu} open={open} />
      )}
      <div
        onClick={handleMenu}
        className={` ${style.container} ${style[props.fontSize]} ${
          style[props.width]
        }  ${style[props.background]}`}
      >
        <img className={style.img} src={props.img} alt={props.altImg} />
        <Link to={props.path}>{props.label}</Link>
      </div>
    </>
  );
}

export default Button;
