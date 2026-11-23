import React, { useContext, useRef, useState } from "react";
import Classes from "./createInvestment.module.css";
import { Link } from "react-router-dom";
import Eachheader from "../../component/eachheader/eachheader";
import Modal from "../../component/modal/modal";
import Context from "../../loginContext";
import Helmet from "../../component/helmet/helmet";
import Supence from "../../component/suspense/suspense";

const CreateInvestment = React.memo(
  ({
    submitTheWholeFormHandler,
    loadingCom,
    plans,
    confirmMsg,
    closeModal,
    openModal,
    loadingWallet,
    showModal,
    companyWallets,
    details,
    setDetails,
  }) => {
    const ctx = useContext(Context);
    // const [show, setShow] = useState(false);
    const selectRef = useRef();
    const inputRef = useRef();

    const [msg, setMsg] = useState("");
    const walletAddress = useRef();
    const [getting, setGetting] = useState("");
    const [add, setAdd] = useState("");
    const [confirm, setConfirm] = useState(false);
    const onClickHander = (percent, plan, time, min, max, duration, e) => {
      openModal();
      setDetails({
        percent,
        plan,
        time,
        min,
        max,
        duration,
      });
    };
    const [okay, setOkay] = useState({
      amount: "",
      coin_name: "",
    });

    const createInvestmentHandler = (e) => {
      e.preventDefault();
      if (
        selectRef.current.value === undefined ||
        inputRef.current.value === undefined
      ) {
        setTimeout(() => {
          setMsg("");
        }, 2000);
        setMsg("Completely fill the required input");
        return;
      } else if (
        selectRef.current.value === "Select coin" ||
        inputRef.current.value.length < 1
      ) {
        setTimeout(() => {
          setMsg("");
        }, 2000);
        setMsg("Completely fill the required input");
        return;
      } else if (
        details.plan?.toLowerCase() != "plan 1" &&
        +inputRef.current.value < +details.min
      ) {
        setTimeout(() => {
          setMsg("");
        }, 2000);
        setMsg(`Min. amount for ${details.plan} is ${details.min}`);
        return;
      } else if (+inputRef.current.value > +details.max) {
        setTimeout(() => {
          setMsg("");
        }, 2000);
        setMsg(`Max. amount for ${details.plan} is ${details.max}`);
        return;
      } else {
        setOkay({
          amount: inputRef.current.value,
          coin_name: selectRef.current.value,
        });
        getAdminwallet(selectRef.current.value);
        setConfirm(!confirm);
      }
    };

    const getAdminwallet = async (coin) => {
      const filter = companyWallets.filter((v) => v.wallet == coin)[0];

      // setGetting(true);
      // const fecthThis = await fetch(
      //   `${ctx.url}admin/account/edit/get-wallet`,
      //   {
      //     method: 'GET',
      //     headers: new Headers({
      //       'Content-Type': 'application/json',
      //       Authorization: `bearer ${sessionStorage.getItem('token')}`,
      //     }),
      //   }
      // );
      // const awaiting = await fecthThis.json();
      setAdd(filter.address);
      // console.log("awaiting => ", awaiting);
      // // setAdd("66a87f87af87as87a78sf87af7as7f8s7asfs7");
      // setGetting(false);
    };

    // console.log("plans => ", plans);

    return (
      <>
        <Helmet title="Create Investment" />
        <ul className={Classes.breadcrumb}>
          <li className={Classes.breadcrumb_item}>
            <Link to="/">Home</Link>
          </li>
          <li className={Classes.breadcrumb_item}>
            <Link to="/">User</Link>
          </li>
          <li className={Classes.breadcrumb_item}>
            <span>Create Investment</span>
          </li>
        </ul>
        <div className={Classes.pageCover}>
          <Eachheader header_name="Create Investment" />
          <div className={Classes.planingCover}>
            {plans.map((v, i) => (
              <EachPlan
                onClick={onClickHander}
                note={v.note}
                min={v.min}
                max={v.max}
                plan={v.name}
                duration={v?.seconds}
                percent={v.rio}
                time={v.time}
              />
            ))}

            {plans.length < 1 && (
              <div
                style={{
                  color: "#fff",
                  textAlign: "center",
                  padding: "12px 0px",
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                }}
              >
                No plans found
              </div>
            )}

            {/* <EachPlan
            onClick={onClickHander}
            min="200"
            max="1,000"
            plan="Plan A"
            percent="6.5"
            time="24 Hours"
          />
          <EachPlan
            onClick={onClickHander}
            min="500"
            max="5,000"
            plan="Plan B"
            btnColor="#e65252"
            percent="8.8"
            time="35 Hours"
          />
          <EachPlan
            onClick={onClickHander}
            min="1000"
            max="15000"
            plan="Plan C"
            percent="12"
            time="48 Hours"
          />
          <EachPlan
            onClick={onClickHander}
            min="2000"
            max="50000"
            plan="Plan D"
            percent="20"
            time="48 Hours"
          />
          <EachPlan
            onClick={onClickHander}
            min="5000"
            max="~"
            plan="VIP Plan"
            percent="30"
            time="70 Hours"
          /> */}
          </div>
        </div>
        <Modal
          showModal={showModal}
          color={details.plan === "Plan B" && "rgb(230, 82, 82)"}
          title={"Create investment for " + details.plan}
          closeModal={() => {
            // setShow(!show);
            setConfirm(false);
            closeModal();
          }}
        >
          <form onSubmit={createInvestmentHandler}>
            {!confirm && (
              <>
                <div
                  style={{ marginTop: "20px !important" }}
                  className={Classes.inputOptions}
                >
                  <select ref={selectRef}>
                    <option>Select coin</option>
                    {/* <option>doge</option>
                  <option>litecoin</option>
                  <option>bnb</option>
                  <option>ethereum</option>
                  <option>bitcoin</option> */}

                    {companyWallets.map((v) => (
                      <option>{v.wallet}</option>
                    ))}
                  </select>
                </div>
                {confirm && <> </>}
                <div className={Classes.inputOptions}>
                  <input
                    required
                    placeholder="Amount to invest"
                    type="number"
                    ref={inputRef}
                    // min={details.min}
                    // max={details.max}
                  />
                </div>
              </>
            )}
            <div className={Classes.msgCoverContain}>{msg}</div>
            {!confirm && (
              <button type="submit" className={Classes.investButton}>
                Invest
              </button>
            )}
            {confirm && (
              <>
                <h1
                  style={{
                    display: getting ? "none" : "flex",
                    textAlign: "center",
                    fontSize: "13px",
                  }}
                >
                  Transfer ${okay.amount} worth of {okay.coin_name} to the
                  company wallet address
                </h1>
                {getting ? "..." : <input ref={walletAddress} value={add} />}
                <h1
                  style={{
                    display: getting ? "none" : "flex",
                    textAlign: "center",
                    fontSize: "13px",
                  }}
                >
                  and confirm
                </h1>
              </>
            )}
            {confirm && (
              <>
                <p className={Classes.msgCoverContain}>{confirmMsg}</p>
                <div
                  style={{
                    display: getting ? "none" : "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    type="button"
                    onClick={submitTheWholeFormHandler.bind(
                      this,
                      okay.coin_name,
                      details.percent,
                      okay.amount,
                      details.plan
                    )}
                    className={Classes.investButton}
                    style={{}}
                  >
                    {loadingCom ? "..." : "Confirm"}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      walletAddress.current.select();
                      document.execCommand("copy");
                      setTimeout(() => {
                        e.target.textContent = "Copy";
                      }, 2000);
                      e.target.textContent = "Copied";
                    }}
                    className={Classes.investButton}
                  >
                    Copy
                  </button>
                </div>
              </>
            )}
          </form>
        </Modal>
      </>
    );
  }
);

export default CreateInvestment;

const EachPlan = ({
  plan,
  percent,
  time,
  min,
  max,
  onClick,
  duration,
  note,
}) => {
  return (
    <div className={Classes.pricing_plan}>
      <h4 className={Classes.post_title}>
        {percent}% after {time == "8760" ? "1 YEAR" : time} {time !== "8760" &&"hours"}
      </h4>
      <p className={Classes.plan_name}>{plan}</p>
      <p style={{fontWeight: "bold"}} className={Classes.plan_name}>
        <div>Spent Amount</div>
        <div
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          ({`$${min} - $${max}`})
        </div>
      </p>
      <p className={Classes.plan_name}>Profit (%) {percent}%</p>
      <p className={Classes.plan_name}>Withdraw Type Instant</p>
      <p className={Classes.plan_name}>24/7 Customer Support</p>
      <div style={{ marginTop: 10 }} className={Classes.plan_btn_w}>
        <button
          className={Classes.btn_success}
          onClick={onClick.bind(this, percent, plan, time, min, max, duration)}
        >
          Invest Now
        </button>
      </div>
    </div>
  );
};
