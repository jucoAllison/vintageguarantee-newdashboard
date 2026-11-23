import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Classes from './referral.module.css';
import Eachheader from '../../component/eachheader/eachheader';
import HelmetHERE from '../../component/helmet/helmet';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import Context from "../../loginContext";


const Referral = () => {
  const ctx = useContext(Context);
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(null);
  const [decoded, setDecoded] = useState({});
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

  useEffect(() => {
    if (!details) {
      return getDetailsHere();
    }
  }, []);

  return (
    <>
      <HelmetHERE title="My Referrals" />
      <ul className={Classes.breadcrumb}>
        <li className={Classes.breadcrumb_item}>
          <Link to="/">Home</Link>
        </li>
        <li className={Classes.breadcrumb_item}>
          <Link to="/">User</Link>
        </li>
        <li className={Classes.breadcrumb_item}>
          <span>Referral</span>
        </li>
      </ul>
      <div className={Classes.pageCover}>
        <Eachheader header_name="My Network" />

        <div className={Classes.element_box}>
          <h5 className={Classes.form_header}>Referral Link</h5>
          <div className={Classes.form_desc}>
            Share your referral link to increase your earnings
          </div>
          <form className={Classes.form_inline}>
            <div className={Classes.input_group} style={{width: '100%'}}>
              <strong>Referrals</strong>
              <div className={Classes.form_control}>{decoded?.referral}</div>

              <strong>Referral Commission</strong>
              <div className={Classes.form_control}>{decoded?.referral_commission}</div>
              

              <strong>Referral Link</strong>
              <input
                style={{width: '100%', paddingLeft: '20px'}}
                className={Classes.form_control}
                placeholder="Ref. Link"
                type="text"
                value={`https://vintageguarantee.com?referral=${decoded?.username}`}
                readOnly
              />
              <div className={Classes.input_group_prepend}>
                {/* <div className={Classes.input_group_text}><button className={Classes.btn_primary}> Copy</button></div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Referral;
