import React, { useContext, useEffect, useState, useRef } from "react";
import Reinvest from "./reinvest";
import Context from "../../loginContext";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const EnventReinvest = React.memo(() => {
  const ctx = useContext(Context);
  const [loading, setLoading] = useState(false);
  // const {data, topLoading = loading} = GetUserDetails();
  const [decoded, setDecoded] = useState({});
  const [wallets, setWallets] = useState([]);
  const [plans, setPlans] = useState([]);
  const [selectPlanRef, setSelectPlanRef] = useState("");
  const [inputAmountRef, setInputAmountRef] = useState("");
  const [selectCoinRef, setSelectCoinRef] = useState("");
  const [msg, setMsg] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState(null);

  const getDetailsHere = () => {
    const source = axios.CancelToken.source();

    axios
      .get(`${ctx.url}user/action/view-info`, {
        cancelToken: source.token,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setLoading(false);

        // res.data?.data && ctx.setDate(res.data?.data);
        res.data?.data && setDetails(res.data?.data);
        var decode = jwtDecode(res.data?.data);
        return setDecoded(decode);

        //checking for multiple responses for more flexibility
        //with the url we send in.
        // res.data.content && setData(res.data.content);
        // res.content && setData(res.content);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log("error from GetUserDetails => ", err);
        alert("Check your internet connection and continue");
      });
  };

  const setSelectPlanRefHandler = (e) => {
    setSelectPlanRef(e.target.value);
  };
  const setSelectCoinRefHandler = (e) => {
    setSelectCoinRef(e.target.value);
  };

  const getAllWallets = async () => {
    try {
      setLoading(true);
      const fecthThis = await fetch(`${ctx.url}admin/account/plans`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      const awaiting = await fecthThis.json();
      setWallets(awaiting.data.wallets);
      setPlans(awaiting.plans.plans);
      setLoading(false);
    } catch (error) {
      console.log("error => ", error);
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    let lowerCase = selectPlanRef.toLowerCase();
    const filtered = plans.filter((v) => v.name.toLowerCase() === lowerCase)[0];
    console.log("filtered => ", filtered);

    if (loading) {
      return;
    }
    if (
      selectPlanRef === "Select plan" ||
      selectCoinRef === "Select coin" ||
      inputAmountRef.length < 1
    ) {
      setTimeout(() => {
        setMsg("");
      }, 2000);
      setMsg("Completely fill the required input");
      return;
    } else {
      if (parseInt(inputAmountRef) < filtered.min) {
        setTimeout(() => {
          setMsg("");
        }, 2000);
        setMsg("Minimum amount is " + filtered.min);
      } else {
        fetch(`${ctx.url}user/action/deposit`, {
          method: "POST",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          }),
          body: JSON.stringify({
            wallet: selectCoinRef,
            earning: filtered.rio,
            amount: +inputAmountRef,
            plan: lowerCase,
            duration: filtered.seconds,
            remark: "Reinvestment",
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.error) {
              setTimeout(() => {
                setMsg("");
              }, 2000);
              setMsg(res.msg);
            }
            setTimeout(() => {
              setMsg("");
            }, 2000);
            setMsg(res.data);
          })
          .catch((err) => {});
      }
    }
  };

  useEffect(() => {
    getAllWallets();
  }, []);

  useEffect(() => {
    if (!details) {
      return getDetailsHere();
    }
  }, []);

  return (
    <Reinvest
      wallets={wallets}
      plans={plans}
      submitFormHandler={submitFormHandler}
      loading={loading}
      details={details}
      selectPlanRef={selectPlanRef}
      selectCoinRef={selectCoinRef}
      ctx={ctx}
      decoded={decoded}
      msg={msg}
      setSelectPlanRefHandler={setSelectPlanRefHandler}
      setSelectCoinRefHandler={setSelectCoinRefHandler}
      inputAmountRef={inputAmountRef}
      setInputAmountRef={setInputAmountRef}
    />
  );
});

export default EnventReinvest;
