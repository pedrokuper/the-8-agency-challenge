import React from "react";
import { Link } from "react-router-dom";
import style from "./BurgerMenu.module.scss";

function BurgerMenu() {
  return (
    <div className={style.wrapper}>
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
