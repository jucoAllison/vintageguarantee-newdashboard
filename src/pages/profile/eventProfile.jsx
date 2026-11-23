import React, { useState, useEffect, useContext } from "react";
import Profile from "./profile";
import Decode from "jwt-decode";
import Context from "../../loginContext";
import { jwtDecode } from "jwt-decode";
import { GetUserDetails } from "../../helper/getUserHelper";
import axios from "axios";

const EventProfile = React.memo(() => {
  const ctx = useContext(Context);
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [decoded, setDecoded] = useState({});

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

  useEffect(() => {
    if (!details) {
      return getDetailsHere();
    }
  }, []);

  return (
    <div>
      <Profile details={decoded} ctx={ctx} loading={loading} />
    </div>
  );
});

export default EventProfile;
