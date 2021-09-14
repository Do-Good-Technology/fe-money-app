import { NavBar } from "antd-mobile";

import { useHistory } from "react-router-dom";

import iconBack from "./aset/iconBack.svg";
import icon from "./aset/icon.svg";

import "./ChooseCategory.css";

function ChooseCategory() {
  let history = useHistory();

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
          Choose category
        </NavBar>
      </div>
      <div className="mainCategory">
        <p className="mainCategory-title">Main category</p>
        <div className="subCategory">
          <img className="subCategory-icon" src={icon} alt="icon category" />
          <p className="subCategory-title">Sub category</p>
        </div>
        <div className="subCategory">
          <img className="subCategory-icon" src={icon} alt="icon category" />
          <p className="subCategory-title">Sub category</p>
        </div>
        <div className="subCategory">
          <img className="subCategory-icon" src={icon} alt="icon category" />
          <p className="subCategory-title">Sub category</p>
        </div>
      </div>
      <div className="mainCategory">
        <p className="mainCategory-title">Main category</p>
        <div className="subCategory">
          <img className="subCategory-icon" src={icon} alt="icon category" />
          <p className="subCategory-title">Sub category</p>
        </div>
        <div className="subCategory">
          <img className="subCategory-icon" src={icon} alt="icon category" />
          <p className="subCategory-title">Sub category</p>
        </div>
        <div className="subCategory">
          <img className="subCategory-icon" src={icon} alt="icon category" />
          <p className="subCategory-title">Sub category</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseCategory;
