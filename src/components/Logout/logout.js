import { connect } from "react-redux";
import * as actions from "../../redux/actions/signupActions";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = (props) => {
  useEffect(() => {
    props.logout();
  }, []);
  return <Navigate to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
    token: state.signupReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
