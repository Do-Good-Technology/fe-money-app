"use-strict";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from "antd";
import axios from "axios";

import UrlApi from "../UrlApi";

const Login = () => {
  const [form] = Form.useForm();
  const qs = require("qs");
  let history = useHistory();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    apiLogin(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const apiLogin = async (values: any) => {
    const keyValue = {
      email_user: values.email,
      password_user: values.password,
    };
    try {
      const data = await axios.post(
        `${UrlApi}auth/login`,
        qs.stringify(keyValue)
      );
      console.log("success", data);
      if (
        data.data.status === "failed" &&
        data.data.info === "email is not registered"
      ) {
        message.warning("email is not registered");
      } else if (
        data.data.status === "failed" &&
        data.data.info === "email is correct, password is incorrect"
      ) {
        message.warning("Wrong password");
      } else if (
        data.data.status === "success" &&
        data.data.info === "email & password are correct"
      ) {
        message.success("Welcome, login success");
        localStorage.setItem("dataUser", JSON.stringify(data.data.dataUser));
        history.push("/");
      } else {
        message.warning("Something's wrong I can feel it");
      }
    } catch {
      console.log("error");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
