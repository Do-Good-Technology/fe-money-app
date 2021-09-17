import { NavBar } from "antd-mobile";
import { Form, Input, Button } from "antd";

import { useHistory } from "react-router-dom";

import iconBack from "../aset/iconBack.svg";

import "./ChangePassword.css";

function ChangePassword() {
  let history = useHistory();

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
          Change password
        </NavBar>
      </div>

      <Form className="form-edit" layout="horizontal" form={form}>
        <Form.Item
          name="old password"
          label="Old password"
          initialValue="rahasia"
          hasFeedback
        >
          <Input.Password
            defaultValue="rahasia"
            placeholder="Please input your old password"
          />
        </Form.Item>
        <Form.Item name="new password" label="New password" hasFeedback>
          <Input.Password
            placeholder="Please input your new password"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm new password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("new password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Please confirm your new password"
          />
        </Form.Item>
        <Form.Item className="edit-button">
          <Button className="edit-button-save-blue" type="primary">Save</Button>
          <Button className="edit-button-cancel">Cancel</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ChangePassword;
