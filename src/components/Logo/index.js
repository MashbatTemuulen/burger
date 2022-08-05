import React from "react";
import css from "./style.module.css";
import logoImage from "../../assets/images/burger-logo.png";
const Logo = (props) => (
  <div className={css.Logo}>
    <img src={logoImage} alt="Logo" />
  </div>
);

export default Logo;
