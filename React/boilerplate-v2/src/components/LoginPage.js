import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import { withRouter } from "react-router";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate</h1>
      <p>Tag line for app.</p>
      <button className="button" onClick={startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

const LoginPageV = withRouter(
  connect(undefined, mapDispatchToProps)(LoginPage)
);

export default LoginPageV;
