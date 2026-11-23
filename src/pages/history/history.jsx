import React, { useState } from "react";
import Classes from "./history.module.css";
import { Link } from "react-router-dom";
import Eachheader from "../../component/eachheader/eachheader";
import DepositList from "./depositlist";
import WithdrawalList from "./withrawal";
import HelmetHERE from "../../component/helmet/helmet";

const History = ({ loadingWallet, wallets, plans }) => {
  const [isWallet, setIsWallet] = useState(false);

  return (
    <>
      <HelmetHERE title="Transaction History" />
      <ul className={Classes.breadcrumb}>
        <li className={Classes.breadcrumb_item}>
          <Link to="/">Home</Link>
        </li>
        <li className={Classes.breadcrumb_item}>
          <Link to="/">User</Link>
        </li>
        <li className={Classes.breadcrumb_item}>
          <span>Transaction History</span>
        </li>
      </ul>
      <div className={Classes.pageCover}>
        <Eachheader header_name="My Transaction History" />
        <div className={Classes.transactionCover}>
          <h5 className={Classes.form_header}>Transaction History</h5>
          <div className={Classes.form_desc}>
            Through this screen, you can get an overview of all your
            transactions so far.
          </div>

          <div
            className={Classes.flexTheBTN}
            style={{
              display: "flex",
              marginBottom: ".1rem",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              paddingBottom: "9px",
            }}
          >
            <div
              onClick={() => setIsWallet(false)}
              style={{
                backgroundColor: !isWallet ? "#24b314" : "#fff",
                border: "1px solid #24b314",
                color: !isWallet ? "#fff" : "#24b314",
                marginRight: "20px",
              }}
              class={Classes.btn_primary}
            >
              Deposit
            </div>
            <div
              onClick={() => setIsWallet(true)}
              style={{
                backgroundColor: isWallet ? "#24b314" : "#fff",
                border: "1px solid #24b314",
                color: isWallet ? "#fff" : "#24b314",
              }}
              class={Classes.btn_primary}
            >
              Withdrawal
            </div>
          </div>
        </div>
        {!isWallet ? (
          <DepositList
            loadingWallet={loadingWallet}
            wallets={wallets}
            plans={plans}
          />
        ) : (
          <WithdrawalList loadingWallet={loadingWallet} />
        )}
      </div>
    </>
  );
};

export default History;
