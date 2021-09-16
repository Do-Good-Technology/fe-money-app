import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { NavBar } from "antd-mobile";
import axios from "axios";

import iconBack from "../aset/iconBack.svg";

import UrlApi from "../UrlApi";

import "./AccountSettings.css";

function AccountSettings() {
  let history = useHistory();
  const [form] = Form.useForm();
  const qs = require("qs");

  const onFinish = (values: any) => {
    console.log("values", values);
    apiEditAccount(values);
  };

  const apiEditAccount = async (values: any) => {
    const keyValue = {
      id_user: "7",
      name_user: values.name,
      email_user: values.email,
    };
    try {
      const data = await axios.post(
        `${UrlApi}settings/edit-account`,
        qs.stringify(keyValue)
      );
      console.log("success", data);
    } catch {
      console.log("error");
    }
  };

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
          Edit Account
        </NavBar>
      </div>
      <div className="edit-profile-photo-wrap">
        <img
          className="edit-profile-photo"
          src="https://avatars.dicebear.com/api/initials/:Nafian%20Hanandyawan.svg "
          alt=""
        />
      </div>
      <Form
        className="form-edit"
        layout="horizontal"
        form={form}
        onFinish={onFinish}
        initialValues={{
          'name': 'Nafian Hanandyawan',
          'email': 'nafianhhh@gmail.com'
        }}
      >
        <Form.Item label="Name" name="name">
          <Input
            placeholder="Insert new name"
          />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input
            placeholder="Insert new email"
          />
        </Form.Item>
        <Form.Item className="edit-button">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button className="edit-button-cancel">Cancel</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AccountSettings;
