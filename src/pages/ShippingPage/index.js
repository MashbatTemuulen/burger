import React, { useEffect, useState } from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import ContactData from "../../components/ContactData/contactData";
import * as actions from "../../redux/actions/orderActions";
import css from "./style.module.css";

const Shipping = (props) => {
  const oorder = {
    orts: props.burgeriinOrts,
    dun: props.niitUne,
    userId: props.userId,
    hayag: {
      name: "",
      address: "",
    },
  };
  const [order, setOrder] = useState(oorder);
  const navigate = useNavigate();
  const getName = (event) => {
    setOrder({ ...order, hayag: { ...order.hayag, name: event.target.value } });
  };
  const getAddress = (event) => {
    setOrder({
      ...order,
      hayag: { ...order.hayag, address: event.target.value },
    });
  };

  const zahialah = () => {
    props.saveOrderAction(order);
  };
  const tsutslah = () => {
    navigate(-1, { replace: true });
  };

  useEffect(() => {
    if (props.newOrderStatus.finished && !props.newOrderStatus.error) {
      navigate("/orders", { replace: true });
    }
  }, [props.newOrderStatus.finished]);

  return (
    <div style={{ textAlign: "center" }} className={css.ShippingPage}>
      <Burger />
      <h1>Нийт үнэ: {props.niitUne}₮</h1>
      {props.newOrderStatus.error &&
        `Алдаа гарлаа ${props.newOrderStatus.error}`}
      <ContactData getName={getName} getAddress={getAddress} />
      <Button daragdsan={tsutslah} btntype="Danger" text="Цуцлах" />
      <Button daragdsan={zahialah} btntype="Success" text="Захиалах" />
      {props.newOrderStatus.saving && <Spinner />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    burgeriinOrts: state.burgerReducer.ingredients,
    niitUne: state.burgerReducer.totalPrice,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);
