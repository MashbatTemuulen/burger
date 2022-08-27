import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummery from "../../components/OrderSummery";
import Spinner from "../../components/General/Spinner";

import { Navigate } from "react-router-dom";

class BurgerBuilder extends Component {
  state = {
    confirmOrder: false,
    loading: false,
    aahContinue: false,
  };

  componentDidMount = () => {};

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  onContinue = () => {
    this.setState({ aahContinue: true });
    this.closeConfirmModal();
  };

  render() {
    return (
      <div>
        {this.state.aahContinue && <Navigate to="/ship" />}
        <Modal show={this.state.confirmOrder} close={this.closeConfirmModal}>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummery
              onCancel={this.closeConfirmModal}
              onContinue={this.onContinue}
            />
          )}
        </Modal>
        {/* {this.state.loading && <Spinner />} */}
        <Burger />
        <BuildControls showConfirmModal={this.showConfirmModal} />
      </div>
    );
  }
}

export default BurgerBuilder;
