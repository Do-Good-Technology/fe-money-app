import { NavBar } from "antd-mobile";

import { useHistory } from "react-router-dom";

import iconBack from "./aset/iconBack.svg";
import icon from "./aset/icon.svg";
import chooseWalletIconWalletGrey from "./aset/chooseWalletIconWalletGrey.svg";
import chooseWalletIconWalletBlue from "./aset/chooseWalletIconWalletBlue.svg";
import chooseWalletIconWalletYellow from "./aset/chooseWalletIconWalletYellow.svg";

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
      <p className="chooseWallet-title">To</p>
      <div className="wallet-wrap">
        <div className="wallet-item">
          <img
            className="wallet-icon"
            src={chooseWalletIconWalletGrey}
            alt="icon wallet"
          />
          <div className="wallet-desc">
            <p className="wallet-desc-title">Dompet real</p>
            <p className="wallet-desc-balance">Rp 850.000</p>
          </div>
        </div>
        <div className="wallet-item">
          <img
            className="wallet-icon"
            src={chooseWalletIconWalletBlue}
            alt="icon wallet"
          />
          <div className="wallet-desc">
            <p className="wallet-desc-title">Rekening BCA</p>
            <p className="wallet-desc-balance">Rp 1.150.000</p>
          </div>
        </div>
        <div className="wallet-item">
          <img
            className="wallet-icon"
            src={chooseWalletIconWalletYellow}
            alt="icon wallet"
          />
          <div className="wallet-desc">
            <p className="wallet-desc-title">Rekening BNI</p>
            <p className="wallet-desc-balance">Rp 2.150.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseWallet;
