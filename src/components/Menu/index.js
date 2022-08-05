import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      <MenuItem exact link="/">
        Шинэ захиалга
      </MenuItem>
      <MenuItem link="/orders">Захиалгууд</MenuItem>
    </ul>
  </div>
);

export default Menu;
