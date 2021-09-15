import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import home from "../aset/home.svg";
import homeSelected from "../aset/homeSelected.svg";
import profile from "../aset/profile.svg";
import profileSelected from "../aset/profileSelected.svg";
import addTransaction from "../aset/addTransaction.svg";

import tabbarHome from "../aset/tabbarHome.svg";
import tabbarWallet from "../aset/tabbarWallet.svg";
import tabbarAccount from "../aset/tabbarAccount.svg";
import tabbarHomeActive from "../aset/tabbarHomeActive.svg";
import tabbarWalletActive from "../aset/tabbarWalletActive.svg";
import tabbarAccountActive from "../aset/tabbarAccountActive.svg";




import { TabBar } from "antd-mobile";

import "./Home.css";

import Transaction from "./Transaction";
import Profile from "./Profile";
import { useEffect } from "react";

const Home = () => {
  let defaultTab;
  if (localStorage.getItem("selectedTab") === null) {
    defaultTab = "transactionTab";
  } else {
    defaultTab = localStorage.getItem("selectedTab");
  }
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  const [hidden, fullScreen] = useState(false);

  let history = useHistory();

  return (
    <div>
      <div id="tabBar">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={hidden}
        >
          <TabBar.Item
            key="Transaction"
            icon={
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  marginTop: "10px",
                  background: `url(${tabbarHome}) center center /  43px 43px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  marginTop: "10px",
                  background: `url(${tabbarHomeActive}) center center /  43px 43px no-repeat`,
                }}
              />
            }
            selected={selectedTab === "transactionTab"}
            onPress={() => {
              setSelectedTab("transactionTab");
              localStorage.setItem("selectedTab", "transactionTab");
            }}
            data-seed="logId"
          >
            <Transaction />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  marginTop: "10px",
                  background: `url(${tabbarWallet}) center center /  43px 43px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  marginTop: "10px",
                  background: `url(${tabbarWalletActive}) center center /  43px 43px no-repeat`,
                }}
              />
            }
            key="addTransaction"
            onPress={() => {
              // history.push("/addtransaction");
            }}
            data-seed="logId1"
          ></TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  marginTop: "10px",
                  background: `url(${tabbarAccount}) center center /  43px 43px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  marginTop: "10px",
                  background: `url(${tabbarAccountActive}) center center /  43px 43px no-repeat`,
                }}
              />
            }
            key="profile"
            selected={selectedTab === "profileTab"}
            onPress={() => {
              setSelectedTab("profileTab");
              localStorage.setItem("selectedTab", "profileTab");
            }}
          >
            <Profile />
          </TabBar.Item>
        </TabBar>
      </div>
    </div>
  );
};

export default Home;
