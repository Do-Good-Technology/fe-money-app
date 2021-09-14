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
      <div className="input">
        <div className="input-wrap">
          <p className="nominal-icon">Rp</p>
          <Input
            className="input-content input-nominal"
            type="number"
            placeholder="0"
          />
        </div>
        <div className="input-wrap">
          <img className="icon-choose" src={iconChoose} alt="icon choose" />
          <Input
            className="input-content"
            type="button"
            value="Choose category"
          />
        </div>
        <div className="input-wrap">
          <img className="icon-note" src={iconNote} alt="icon note" />
          <Input
            className="input-content"
            type="text"
            placeholder="Note"
          />
        </div>
        <div className="input-wrap-date">
          <img className="icon-date" src={iconDate} alt="icon date" />
          <DatePicker className="input-content date-addTransaction" defaultValue={moment()} format={"dddd, MMM YY"} />
        </div>
        <div className="input-wrap">
          <img className="icon-choose" src={iconChoose} alt="icon choose" />
          <Input
            className="input-content"
            type="button"
            value="Choose wallet"
          />
        </div>
      </div>
      <div className="buttonWrap-saveTransaction">
          <button className="button-saveTransaction">
            Save
          </button>
      </div>
    </div>
  );
}

export default Addtransaction;
