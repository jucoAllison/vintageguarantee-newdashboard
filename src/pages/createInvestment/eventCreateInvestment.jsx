import React, { useContext, useEffect, useState } from "react";
import CreateInvestment from "./createInvestment";
import Context from "../../loginContext";
import Supence from "../../component/suspense/suspense";
import { useNavigate } from "react-router-dom";

const EventCreateInvestment = React.memo(() => {
  const ctx = useContext(Context);
  const [confirmMsg, setConfirmMsg] = useState("");
  const [loadingCom, setLoadingCom] = useState(false);
  const [modal, setModal] = useState(false);
  const [loadingWallet, setLoadingWallet] = useState(false);
  const [details, setDetails] = useState({});
  const [wallets, setWallets] = useState([]);
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();
  const sendInvestment = async (
    coin_invested,
    percentage_earn,
    amount_invested,
    plan,
    e
  ) => {
    setLoadingCom(true);
    console.log("coin_invested", coin_invested);
    console.log("percentage_earn", percentage_earn);
    console.log("amount_invested", amount_invested);
    console.log("plan", plan);

    const fetchData = await fetch(`${ctx.url}user/action/deposit`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `bearer ${sessionStorage.getItem("token")}`,
      }),
      body: JSON.stringify({
        wallet: coin_invested,
        earning: +percentage_earn,
        amount: +amount_invested,
        plan: plan.toLowerCase(),
        remark: "hello world",
        duration: details.duration,
      }),
    });
    const parseJs = await fetchData.json();
    if (parseJs.error) {
      setTimeout(() => {
        setConfirmMsg("");
      }, 2000);
      setConfirmMsg(parseJs.msg);
    }
    setLoadingCom(false);
    setTimeout(() => {
      setConfirmMsg("");
      setModal(!modal);
      navigate("/transaction-history");
    }, 2000);
    setConfirmMsg(parseJs.data);
  };

  const getAllWallets = async () => {
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

  useEffect(() => {
    getAllWallets();
  }, []);
  return (
    <>
      {loadingWallet ? (
        <Supence />
      ) : (
        <CreateInvestment
          submitTheWholeFormHandler={sendInvestment}
          loadingCom={loadingCom}
          details={details}
          setDetails={setDetails}
          plans={plans}
          confirmMsg={confirmMsg}
          loadingWallet={loadingWallet}
          closeModal={() => setModal(!modal)}
          showModal={modal}
          openModal={() => setModal(true)}
          companyWallets={wallets}
        />
      )}
    </>
  );
});

export default EventCreateInvestment;
