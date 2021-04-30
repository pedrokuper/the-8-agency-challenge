import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./BurgerMenu.module.scss";

function BurgerMenu(props) {
  const isOpen = props.open ? style.burgerActive : style.burgerClose;

  return (
    <div className={`${style.wrapper} ${isOpen}`}>
      <Link className={style.link} to="/">
        Home
      </Link>
      <Link className={style.link} to="">
        Acerca de
      </Link>
      <Link className={style.link} to="/projects">
        Proyectos
      </Link>
      <Link className={style.link} to="">
        Nuestro equipo
      </Link>
      <Link className={style.link} to="/contact">
        Contáctanos
      </Link>
    </div>
  );
}

export default BurgerMenu;
