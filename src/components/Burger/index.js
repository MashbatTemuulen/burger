import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
import { connect } from "react-redux";

const Burger = (props) => {
  const items = Object.entries(props.orts);
  let content = [];
  items.map((element) => {
    for (let i = 0; i < element[1]; i++) {
      content.push(
        <BurgerIngredient key={`${element[0]}${i}`} type={element[0]} />
      );
    }
    return 0;
  });
  if (content.length === 0) {
    content = <p>Хачиртай талхныхаа орцыг сонгоно уу</p>;
  }
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orts: state.burgerReducer.ingredients,
  };
};

export default connect(mapStateToProps)(Burger);
