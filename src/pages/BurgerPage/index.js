import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummery from "../../components/OrderSummery";
import instance from "../../axios-orders";
import Spinner from "../../components/General/Spinner";

import { useNavigate } from "react-router-dom";

const INGREDIENT_PRICES = {
  salad: 150,
  cheese: 250,
  bacon: 800,
  meat: 1500,
};

const INGREDIENT_NAMES = {
  bacon: "Гахайн мах",
  cheese: "Бяслаг",
  meat: "Үхрийн мах",
  salad: "Салад",
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchasing: false,
    confirmOrder: false,
    loading: false,
  };

  componentDidMount = () => {};

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  onContinue = () => {
    const order = {
      orts: this.state.ingredients,
      dun: this.state.totalPrice,
      hayag: {
        name: "Temuulen",
        city: "Ulaanbaatar",
        street: "10-r horoolol 23-12",
      },
    };

    this.setState({ loading: true });

    instance
      .post("/orders.json", order)
      .then((response) => {
        alert("Амжилттай хадгалагдлаа!");
      })
      .finally(() => {
        this.setState({ loading: false });
      });
    this.closeConfirmModal();
  };

  ortsNemeh = (type) => {
    const newIngredient = { ...this.state.ingredients };
    newIngredient[type]++;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      purchasing: true,
      totalPrice: newPrice,
      ingredients: newIngredient,
    });
  };
  ortsHasah = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredient = { ...this.state.ingredients };
      newIngredient[type]--;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({
        purchasing: newPrice > 0,
        totalPrice: newPrice,
        ingredients: newIngredient,
      });
    }
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div>
        <Modal show={this.state.confirmOrder} close={this.closeConfirmModal}>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummery
              onCancel={this.closeConfirmModal}
              onContinue={this.onContinue}
              price={this.state.totalPrice}
              ingredientNames={INGREDIENT_NAMES}
              ingredients={this.state.ingredients}
            />
          )}
        </Modal>
        {/* {this.state.loading && <Spinner />} */}
        <Burger orts={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientsNames={INGREDIENT_NAMES}
          disabled={!this.state.purchasing}
          price={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          ortsHasah={this.ortsHasah}
          ortsNemeh={this.ortsNemeh}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
