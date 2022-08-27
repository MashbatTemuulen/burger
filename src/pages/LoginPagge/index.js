import { useState } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const [state, setState] = useState({ email: "", password: "" });
  const changeEmail = (event) => {
    setState({ ...state, email: event.target.value });
  };
  const changePassword = (event) => {
    setState({ ...state, password: event.target.value });
  };
  const login = () => {
    props.login(state.email, state.password);
  };
  return (
    <div className={css.Login}>
      {props.userId && <Navigate to="/orders" />}
      <div>Нэвтрэх</div>
      <input type="text" placeholder="Email..." onChange={changeEmail} />
      <input
        type="password"
        placeholder="Password..."
        onChange={changePassword}
      />
      {props.firebaseError && (
        <div style={{ color: "red" }}>{props.firebaseError}</div>
      )}
      {props.logginIn && <Spinner />}
      <Button text="Login" btntype="Success" daragdsan={login} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    logginIn: state.signupReducer.logginIn,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId,
    token: state.signupReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(actions.loginUser(email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
