import React from "react";
import moment from "moment";

import { DatePicker, Pagination } from "antd";

import avatar from "../aset/avatar.svg";
import icon from "../aset/icon.svg";
import iconTrans from "../aset/iconTrans.svg";

import "./Transaction.css";

function Transaction() {
  return (
    <div className="transaction-tab">
      <div className="home-header">
        <div>
          <p className="greetings">Good Morning, Zain</p>
          <p className="greetings-sub">Always manage your money</p>
        </div>
        <img className="header-avatar" src={avatar} alt="avatar" />
      </div>
      <div className="totalBalance">
        <div className="tb-content-wrap">
          <img className="tb-icon" src={icon} alt="icon" />
          <div className="tb-desc">
            <p className="tb-desc1">Total Balance</p>
            <p className="tb-desc2">Rp 2.500.000</p>
          </div>
        </div>
      </div>
      <p className="transaction-title">Transaction</p>
      <div className="transaction-month">
        <DatePicker className="ts-date" defaultValue={moment()} format={"MMMM YY"} picker="month" />
      </div>
      {/* <Pagination simple current={<DatePicker/>} /> */}
      <div className="transaction-conclusion">
        <div className="trans-con-wrap">
          <div className="trans-con-left">
            <p>Income</p>
            <p>Expense</p>
          </div>
          <div className="trans-con-right">
            <p>Rp 1.500.000</p>
            <p>Rp 150.000</p>
            <p className="trans-con-total">Rp 1.350.000</p>
          </div>
        </div>
      </div>
      <div className="transaction-content-wrap">
        <div className="ts-content">
          <div className="ts-content-header-wrap">
            <div className="ts-content-header">
              <p className="ts-content-header-date">02</p>
              <div className="ts-content-header-monthDay">
                <p className="ts-content-header-day">Monday</p>
                <p className="ts-content-header-month">August 2021</p>
              </div>
            </div>
            <p className="ts-content-header-total">- Rp85.000</p>
          </div>
          <div className="ts-content-item">
            <img className="item-icon" src={iconTrans} alt="icon transaction" />
            <div className="itemDesk-wrap">
              <p className="item-category">Food</p>
              <p className="item-note">Bakwan + nasi pecel</p>
            </div>
            <p className="item-price">Rp 65.000</p>
          </div>
          <div className="ts-content-item">
            <img className="item-icon" src={iconTrans} alt="icon transaction" />
            <div className="itemDesk-wrap">
              <p className="item-category">Drinks</p>
              <p className="item-note">Es teh</p>
            </div>
            <p className="item-price">Rp 20.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
