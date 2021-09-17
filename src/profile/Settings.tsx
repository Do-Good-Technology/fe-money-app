import { NavBar } from "antd-mobile";
import { useHistory } from "react-router-dom";

import iconBack from "../aset/iconBack.svg";
import profileIconEditProfile from "../aset/profileIconEditProfile.svg";
import profileIconLogout from "../aset/profileIconLogout.svg";


import "./Settings.css";

function Settings() {
  let history = useHistory();

  return (
    <div>
      <div className="navbar">
        <NavBar
          mode="light"
          leftContent={
            <img className="icon-back" src={iconBack} alt="icon back" />
          }
          onLeftClick={() => history.push("/")}
        >
          Settings
        </NavBar>
      </div>
      <div
        className="profile-menu"
        onClick={() => {
          history.push("/changePassword");
        }}
      >
        <img
          className="profile-menu-icon"
          src={profileIconEditProfile}
          alt="icon edit password"
        />
        <p className="profile-menu-title">Change password</p>
      </div>
      <div
        className="profile-menu"
        onClick={() => {
          history.push("");
        }}
      >
        <img
          className="profile-menu-icon"
          src={profileIconLogout}
          alt="icon logout"
        />
        <p className="profile-menu-title logout">Log Out</p>
      </div>
    </div>
  );
}

export default Settings;
