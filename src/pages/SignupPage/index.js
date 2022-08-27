import { useState } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Navigate } from "react-router-dom";

const Signup = (props) => {
  const [state, setState] = useState({
    email: "",
    password1: "",
    password2: "",
    error: "",
  });
  const changeEmail = (event) => {
    setState({ ...state, email: event.target.value });
  };
  const changePassword1 = (event) => {
    setState({ ...state, password1: event.target.value });
  };
  const changePassword2 = (event) => {
    setState({ ...state, password2: event.target.value });
  };
  const signup = () => {
    if (state.password1 === state.password2) {
      props.signupUser(state.email, state.password1);
      setState({ ...state, error: "Success" });
    } else {
      setState({ ...state, error: "Нууц үгнүүд тохирохгүй байна!" });
    }
  };
  return (
    <div className={css.Login}>
      {/* {props.userId && navigate("/orders", { replace: true })} */}
      {props.userId && <Navigate to="/" replace />}
      <div>Бүртгэлийн форм</div>
      <input type="text" placeholder="Email..." onChange={changeEmail} />
      <input
        type="password"
        placeholder="Password..."
        onChange={changePassword1}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={changePassword2}
      />
      {state.error && <div style={{ color: "red" }}>{state.error}</div>}
      {props.firebaseError && (
        <div style={{ color: "red" }}>{props.firebaseError}</div>
      )}
      {props.saving && <Spinner />}
      <Button text="Бүртгүүлэх" btntype="Success" daragdsan={signup} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
