import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import profileHeader from "../aset/profileHeader.svg";
import profileIconEditProfile from "../aset/profileIconEditProfile.svg";
import profileIconSetting from "../aset/profileIconSetting.svg";
import profileIconInfo from "../aset/profileIconInfo.svg";

import "./Profile.css";

function Profile() {
  let history = useHistory();

  return (
    <div>
      <div className="profile-header">
        <img
          className="profile-photo"
          src="https://avatars.dicebear.com/api/initials/:Nafian%20Hanandyawan.svg "
          alt=""
        />
        <img className="profile-background" src={profileHeader} alt="" />
      </div>
      <div className="profile-desk">
        <p className="profile-name">Nafian Hanandyancuk</p>
        <p className="profile-email">nafianhhh@gmail.com</p>
      </div>
      <hr className="profile-line" />
      <div
        className="profile-menu"
        onClick={() => {
          history.push("/accountSettings");
        }}
      >
        <img
          className="profile-menu-icon"
          src={profileIconEditProfile}
          alt="icon edit profile"
        />
        <p className="profile-menu-title">Edit Account</p>
      </div>
      <div className="profile-menu">
        <img
          className="profile-menu-icon"
          src={profileIconSetting}
          alt="icon setting"
        />
        <p className="profile-menu-title">Settings</p>
      </div>
      <div className="profile-menu">
        <img
          className="profile-menu-icon"
          src={profileIconInfo}
          alt="icon about"
        />
        <p className="profile-menu-title">About MoneyApp</p>
      </div>
    </div>
  );
}

export default Profile;
