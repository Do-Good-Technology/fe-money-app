import React, { useState } from "react";

import moment from "moment";
import { useHistory } from "react-router-dom";

import { NavBar } from "antd-mobile";
import { Input, DatePicker } from "antd";

import iconBack from "../aset/iconBack.svg";
import iconChoose from "../aset/iconChoose.svg";
import iconNote from "../aset/iconNote.svg";
import iconDate from "../aset/iconDate.svg";

import "./Addtransaction.css";

function Addtransaction() {
  let history = useHistory();

  return (
    <div>
      <div className="navbar">
        <NavBar
          mode="light"
          leftContent={
            <img className="icon-back" src={iconBack} alt="icon back" />
          }
          onLeftClick={() => history.push("/home")}
        >
          Add transaction
        </NavBar>
      </div>
    </div>
  );
}

export default Addtransaction;
