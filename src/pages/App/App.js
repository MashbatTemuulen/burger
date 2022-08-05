import styles from "./App.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import Sidebar from "../../components/Sidebar";
import React, { Component } from "react";
import OrderPage from "../OrderPage";
import { Routes, Route } from "react-router-dom";
import ShippingPage from "../ShippingPage";

class App extends Component {
  state = {
    showSidebar: false,
  };
  toggleSidebar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };
  render() {
    return (
      <div className="App">
        <Toolbar toggleSidebar={this.toggleSidebar} />
        <Sidebar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <main className={styles.Content}>
          <Routes>
            {/* <Route path="/orders" element={<OrderPage />} />
            <Route path="/" exact element={<BurgerPage />} /> */}
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/ship" element={<ShippingPage />} />
            <Route path="/" exact element={<BurgerPage />} />
          </Routes>
        </main>
        <div></div>
      </div>
    );
  }
}

export default App;
