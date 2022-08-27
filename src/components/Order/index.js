import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  //   console.log(props.order);
  return (
    <div className={css.Order}>
      <p>Захиалагч ID: {props.order.userId}</p>
      <p>Захиалагч нэр: {props.order.hayag.name}</p>
      <p>Хаяг: {props.order.hayag.address}</p>
      <p>Дүн: {props.order.dun}</p>
    </div>
  );
};

export default Order;
