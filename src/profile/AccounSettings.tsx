import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Form, Input, Button } from "antd";
import { NavBar } from "antd-mobile";

import iconBack from "../aset/iconBack.svg";

import "./AccountSettings.css";

function AccountSettings() {
  let history = useHistory();

  // abs

  const [form] = Form.useForm();

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
      <Form className="form-edit" layout="horizontal" form={form}>
        <Form.Item label="Name">
          <Input
            defaultValue="Nafian Hanandyawan"
            placeholder="Insert new name"
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            defaultValue="nafianhhh@gmail.com"
            placeholder="Insert new email"
          />
        </Form.Item>
        <Form.Item className="edit-button">
          <Button type="primary">Save</Button>
          <Button className="edit-button-cancel" >Cancel</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AccountSettings;
