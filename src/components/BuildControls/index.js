import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>
        Таны хачиртай талнхы үнэ : <strong>{props.price}</strong>
      </p>
      {Object.keys(props.ingredientsNames).map((el) => (
        <BuildControl
          key={el}
          ortsHasah={props.ortsHasah}
          ortsNemeh={props.ortsNemeh}
          disabled={props.disabledIngredients}
          type={el}
          orts={props.ingredientsNames[el]}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={props.disabled}
        className={css.OrderButton}
      >
        Захиалах
      </button>
    </div>
  );
};

export default BuildControls;
