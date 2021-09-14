"use-strict";

import React, { useState } from "react";
import { Form, Input, Checkbox, Button, message } from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";

import UrlApi from "../UrlApi";

import "./Register.css";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function Register() {
  const [form] = Form.useForm();
  const qs = require("qs");
  let history = useHistory();

  const onFinish = (values: any) => {
    // setFormValue(values);
    apiRegister(values);
  };

  const apiRegister = async (values: any) => {
    console.log(values);

    const keyValue = {
      email_user: values.email,
      password_user: values.password,
      name_user: values.name,
    };

    try {
      const data = await axios.post(
        `${UrlApi}auth/register`,
        qs.stringify(keyValue)
      );
      console.log(data);
      if (
        data.data.status === "failed" &&
        data.data.info === "email already has registered"
      ) {
        message.warning("email already has registered");
      } else if (
        data.data.status === "success" &&
        data.data.info === "new account already registered"
      ) {
        message.success("Register Success");
        localStorage.setItem("dataUser", JSON.stringify(data.data.dataUser));
        history.push("/");
      } else {
        message.warning("something weird happen I can feel it");
      }
    } catch {
      message.error("Connection error");
    }
  };

  return (
    <div className="App">
      <h2>Buat akun</h2>
      <h3>deskripsi singkat penyemangat</h3>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="#">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button className="registerButton" danger type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
