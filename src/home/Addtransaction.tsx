import React, { useState } from "react";

import moment from "moment";
import { useHistory } from "react-router-dom";

import { NavBar } from "antd-mobile";
import { DatePicker, Form, Input, Button } from "antd";

import iconBack from "../aset/iconBack.svg";
import addTransactionIconChooseWallet from "../aset/addTransactionIconChooseWallet.svg";

import "./Addtransaction.css";

function Addtransaction() {
  let history = useHistory();

  moment().calendar(null, {
    sameDay: "[Today]",
  });

  const [form] = Form.useForm();

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
      <div className="chooseWallet-wrap">
        <p className="cw-label">Choose wallet</p>
        <img
          className="cw-img"
          src={addTransactionIconChooseWallet}
          alt="icon choose wallet"
        />
        <p className="cw-title">Rekening BCA</p>
      </div>

      <Form
        className="form-edit"
        layout="horizontal"
        form={form}
        // onFinish={onFinish}
        initialValues={{
          name: "Nafian Hanandyawan",
          email: "nafianhhh@gmail.com",
        }}
      >
        <Form.Item label="Nominal" name="nominal">
          <Input prefix="Rp " type="number" placeholder="0" />
        </Form.Item>
        <Form.Item label="Date" name="date">
          <DatePicker
            className="input-content date-addTransaction"
            defaultValue={moment()}
            format={"dddd, MMM YY"}
          />
        </Form.Item>
        <Form.Item label="Category" name="category">
          <Input defaultValue="Choose Category" />
        </Form.Item>
        <Form.Item className="edit-button">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Addtransaction;
