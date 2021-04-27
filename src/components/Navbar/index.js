import React from "react";
import style from "./Navbar.module.scss";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-router-dom";
import Button from "../Button";

function Navbar() {
  return (
    <nav className={style.container}>
      <ul>
        <li>
          <Button label="menu" img={contactImg} fontSize="xs" />
        </li>
        <li>
          <img src={logo} alt="" />
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
