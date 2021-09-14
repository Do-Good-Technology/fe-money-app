import { NavBar } from "antd-mobile";

import { useHistory } from "react-router-dom";

import iconBack from "./aset/iconBack.svg";
import icon from "./aset/icon.svg";

import "./ChooseWallet.css";

function ChooseWallet() {
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
          Choose wallet
        </NavBar>
      </div>
      <div className="wallet-wrap">
          <div className="wallet-item">
              <img className="wallet-icon" src={icon} alt="icon wallet" />
              <div className="wallet-desc">
                  <p className="wallet-desc-title">Black Wallet</p>
                  <p className="wallet-desc-balance">Rp 1.350.000</p>
              </div>
          </div>
          <div className="wallet-item">
              <img className="wallet-icon" src={icon} alt="icon wallet" />
              <div className="wallet-desc">
                  <p className="wallet-desc-title">White Wallet</p>
                  <p className="wallet-desc-balance">Rp 1.150.000</p>
              </div>
          </div>
      </div>
    </div>
  );
}

export default ChooseWallet;
