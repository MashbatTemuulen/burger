import styles from "./App.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import Sidebar from "../../components/Sidebar";
import Logout from "../../components/Logout//logout";
import React, { Component } from "react";
import OrderPage from "../OrderPage";
import { Routes, Route, Navigate } from "react-router-dom";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPagge";
import SignupPage from "../SignupPage";
import { connect } from "react-redux";
import { Fragment } from "react";
import Error from "../ErrorPage";
import * as actions from "../../redux/actions/loginActions";
import * as singupActions from "../../redux/actions/signupActions";

class App extends Component {
  state = {
    showSidebar: false,
  };
  toggleSidebar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");

    if (token) {
      if (expireDate > new Date()) {
        // Hugatsaa duusaagui token baina, login hiine
        this.props.autoLogin(token, userId);
        this.props.autoLogoutAfterMillisec(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        // Hugatsaa dussan token baina, logout hiine
        this.props.logout();
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Toolbar toggleSidebar={this.toggleSidebar} />
        <Sidebar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <main className={styles.Content}>
          {/* <Routes>
            {this.props.userId ? (
              <Fragment>
                <Route path="/orders" element={<OrderPage />} />
                <Route path="/ship" element={<ShippingPage />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/" exact element={<BurgerPage />} />
              </Fragment>
            ) : (
              <Fragment>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<Error />} />
              </Fragment>
            )}
          </Routes> */}
          <Routes>
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/ship" element={<ShippingPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" exact element={<BurgerPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <div></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(singupActions.logout()),
    autoLogoutAfterMillisec: (ms) =>
      dispatch(singupActions.autoLogoutAfterMillisec(ms)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
