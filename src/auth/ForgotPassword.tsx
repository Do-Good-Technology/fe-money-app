import { NavBar } from "antd-mobile";

import forgotPasswordIconEmail from "../aset/forgotPasswordIconEmail.svg";
import iconBack from "../aset/iconBack.svg";

import { useHistory } from "react-router-dom";

import "./ForgotPassword.css";

function ForgotPassword() {
  let history = useHistory();

  return (
    <div>
      <div className="navbar">
        <NavBar
          mode="light"
          leftContent={
            <img className="icon-back" src={iconBack} alt="icon back" />
          }
          onLeftClick={() => history.push("/login")}
        >
          Forgot Password
        </NavBar>
      </div>
      <div className="fp-desk">
        <p>Hi</p>
        <p>
          Sorry to hear you’re having trouble logging into MoneyApp(?). Please
          contact us via our email to help you get straight back into your
          account.
        </p>
      </div>
      <div className="fp-button">
        <img
          className="fp-bt-icon"
          src={forgotPasswordIconEmail}
          alt="icon email"
        />
        <p className="fp-bt-desk">dogoodtech.info@gmail.com</p>
      </div>
    </div>
  );
}

export default ForgotPassword;
