import { NavBar } from "antd-mobile";

import { useHistory } from "react-router-dom";

import iconBack from "./aset/iconBack.svg";
import categoryIconFood from "./aset/categoryIconFood.svg";
import categoryIconShopping from "./aset/categoryIconShopping.svg";
import categoryIconHealth from "./aset/categoryIconHealth.svg";
import categoryIconDonation from "./aset/categoryIconDonation.svg";
import categoryIconEducation from "./aset/categoryIconEducation.svg";
import categoryIconBill from "./aset/categoryIconBill.svg";
import categoryIconTransportation from "./aset/categoryIconTransportation.svg";
import categoryIconEntertainment from "./aset/categoryIconEntertainment.svg";
import categoryIconMiscellaneous from "./aset/categoryIconMiscellaneous.svg";
import categoryIconOthers from "./aset/categoryIconOthers.svg";

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

      <div className="category">
        <img
          className="category-icon"
          src={categoryIconFood}
          alt="icon category"
        />
        <p className="category-title">Food</p>
      </div>
      <div className="category">
        <img
          className="category-icon"
          src={categoryIconShopping}
          alt="icon category"
        />
        <p className="category-title">Shopping</p>
      </div>
      <div className="category">
        <img
          className="category-icon"
          src={categoryIconHealth}
          alt="icon category"
        />
        <p className="category-title">Health</p>
      </div>
      <div className="category">
        <img
          className="category-icon"
          src={categoryIconDonation}
          alt="icon category"
        />
        <p className="category-title">Donations</p>
      </div>
      <div className="category">
        <img
          className="category-icon"
          src={categoryIconEducation}
          alt="icon category"
        />
        <p className="category-title">Education</p>
      </div>
      <div className="category">
        <img
          className="category-icon"
          src={categoryIconBill}
          alt="icon category"
        />
        <p className="category-title">Bill</p>
      </div>
      <div className="category">
        <img
          className="category-icon"
          src={categoryIconTransportation}
          alt="icon category"
        />
        <p className="category-title">Transportation</p>
      </div>
      <div className="category">
        <img
          className="category-icon"
          src={categoryIconEntertainment}
          alt="icon category"
        />
        <p className="category-title">Entertainment</p>
      </div>
      <div className="category">
        <img
          className="category-icon"
          src={categoryIconMiscellaneous}
          alt="icon category"
        />
        <p className="category-title">Miscellaneous Expenses</p>
      </div>
      <div className="category">
        <img
          className="category-icon"
          src={categoryIconOthers}
          alt="icon category"
        />
        <p className="category-title">Others</p>
      </div>
    </div>
  );
}

export default ChooseCategory;
