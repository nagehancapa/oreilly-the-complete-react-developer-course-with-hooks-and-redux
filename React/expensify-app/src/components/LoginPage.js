import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import { withRouter } from "react-router";

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

const LoginPageV = withRouter(
  connect(undefined, mapDispatchToProps)(LoginPage)
);

export default LoginPageV;
