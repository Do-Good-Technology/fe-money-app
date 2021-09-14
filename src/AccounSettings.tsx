import { NavBar } from "antd-mobile";

import { useHistory } from "react-router-dom";

import iconBack from "./aset/iconBack.svg";
import editFotoProfile from "./aset/editFotoProfile.svg";

import "./AccountSettings.css";

function AccountSettings() {
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
          Account Settings
        </NavBar>
      </div>
      <form action="">
        <div className="edit-fotoProfile-wrap">
          <img
            className="edit-fotoProfile"
            src={editFotoProfile}
            alt="edit foto profile"
          />
        </div>
        <div className="editSetting-wrap">
          <label>Name</label>
          <input type="text" placeholder="Insert your new name" defaultValue="Nafian Hanandyawan" />
        </div>
        <div className="editSetting-wrap">
          <label>Email</label>
          <input type="text" placeholder="Insert your new email" defaultValue="zainurimahmud@gmail.com" />
        </div>
        <div className="editSetting-wrap">
          <label>Password</label>
          <input type="password" placeholder="Insert your new password" defaultValue="rahasia" />
        </div>
        <div className="editSetting-wrap">
          <label>Confirm password</label>
          <input type="password" placeholder="Confirm your new password" defaultValue="rahasia" />
        </div>
        <div className="buttonWrap-saveTransaction">
          <button className="button-saveTransaction">
            Save
          </button>
      </div>
      </form>
    </div>
  );
}

export default AccountSettings;
