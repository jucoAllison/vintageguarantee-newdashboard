import React, { useState, useContext, useEffect } from "react";
import Home from "./home";
import Context from "../../loginContext";
import axios from "axios";

const EventHome = () => {
  // const {data, loading, error} = GetUserDetails();
  // const [decoded, setDecoded] = useState({});
  const ctx = useContext(Context);
  const [data, setData] = useState(null);
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

        res.data?.data && ctx.setDate(res.data?.data);
        res.data?.data && setData(res.data?.data);

        //checking for multiple responses for more flexibility
        //with the url we send in.
        // res.data.content && setData(res.data.content);
        // res.content && setData(res.content);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log("error from GetUserDetails => ", err);
      });
  };

  useEffect(() => {
    if (!data) {
      return getDetailsHere();
    }
  }, []);

  return <Home ctx={ctx.data} loading={loading} decoded={ctx.decoded} />;
};

export default EventHome;
