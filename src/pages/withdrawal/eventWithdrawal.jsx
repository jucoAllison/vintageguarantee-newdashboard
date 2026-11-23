import React, { useContext, useEffect, useRef, useState } from "react";
import Withdrawal from "./withdrawal";
import { jwtDecode } from "jwt-decode";
import Context from "../../loginContext";
import axios from "axios";

const EventWithdrawal = React.memo(() => {
  const [decoded, setDecoded] = useState({});
  const ctx = useContext(Context);
  const [loadingWallet, setLoadingWallet] = useState(false);
  const [wallets, setWallets] = useState([]);
  const [plans, setPlans] = useState([]);
  const inputAmoutWithRef = useRef();
  const inputAddressWithRef = useRef();
  const selectAmoutWithRef = useRef();
  const [msg, setMsg] = useState("");
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(null);
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


  const getPlans = async () => {
    try {
      setLoadingWallet(true);
      const fecthThis = await fetch(`${ctx.url}admin/account/plans`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      const awaiting = await fecthThis.json();
      // console.log('awaiting => ', awaiting);
      setWallets(awaiting.data.wallets);
      setPlans(awaiting.plans.plans);
      setLoadingWallet(false);
    } catch (error) {
      console.log("error => ", error);
    }
  };

  const submitWithdrawal = async (e) => {
    e.preventDefault();
    if (loadingWallet) {
      return;
    }
    if (
      selectAmoutWithRef.current.value.length < 1 ||
      inputAddressWithRef.current.value.length < 1 ||
      inputAmoutWithRef.current.value.length < 1
    ) {
      setTimeout(() => {
        setMsg("");
      }, 2000);
      setMsg("Please fill in your wallet address and continue");
      return;
    }
    try {
      // ()
      // console.log("wallet => ", {
      //   address: inputAddressWithRef.current.value,
      //   wallet: selectAmoutWithRef.current.value,
      // });

      setLoadingWallet(true);
      const awaitFetch = await fetch(`${ctx.url}user/action/withdraw`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `bearer ${sessionStorage.getItem("token")}`,
        }),
        body: JSON.stringify({
          amount: parseInt(inputAmoutWithRef.current.value),
          // gateway: selectAmoutWithRef.current.value,
          wallet: {
            address: inputAddressWithRef.current.value,
            wallet: selectAmoutWithRef.current.value,
          },
        }),
      });
      const parseJson = await awaitFetch.json();
      if (parseJson.error) {
        setTimeout(() => {
          setMsg("");
        }, 2000);
        setMsg(parseJson.msg);
        return;
      }
      setTimeout(() => {
        setMsg("");
      }, 2000);
      setMsg(parseJson.data);
      window.location.replace("/");
      setLoadingWallet(false);
    } catch (error) {
      setLoadingWallet(true);
    }
  };

  useEffect(() => {
    getPlans();
  }, []);


  useEffect(() => {
    if (!details) {
      return getDetailsHere();
    }
  }, []);

  return (
    <Withdrawal
      details={ctx.data}
      loading={loadingWallet}
      plans={wallets}
      inputAmoutWithRef={inputAmoutWithRef}
      inputAddressWithRef={inputAddressWithRef}
      selectAmoutWithRef={selectAmoutWithRef}
      msg={msg}
      submitWithdrawal={submitWithdrawal}
      decoded={decoded}
    />
  );
});

export default EventWithdrawal;
