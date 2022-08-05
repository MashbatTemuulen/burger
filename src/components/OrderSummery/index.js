import React from "react";
import Button from "../General/Button";

const OrderSummery = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны захиалсан орцууд : </p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Захиалгын дүн : {props.price}₮</strong>
      </p>
      <p>Цааш үргэлжлүүлэх үү?</p>
      <Button daragdsan={props.onCancel} btntype="Danger" text="Татгалзах" />
      <Button
        daragdsan={props.onContinue}
        btntype="Success"
        text="Үргэлжлүүл"
      />
    </div>
  );
};

export default OrderSummery;
