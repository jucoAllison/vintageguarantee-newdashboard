import React, {useContext, useEffect, useState} from 'react';
import Classes from './sidebar.module.css';
import Ava from '../../../assets/favicon.png';
import {NavLink} from 'react-router-dom';
import Dashboard from '../../../assets/dashboard.svg?react';
import Create from '../../../assets/create.svg?react';
import Retry from '../../../assets/retry.svg?react';
import Request from '../../../assets/request.svg?react';
import List from '../../../assets/list.svg?react';
import Profile from '../../../assets/profile.svg?react';
import Referrals from '../../../assets/referral.svg?react';
import Home from '../../../assets/home.svg?react';
import Logout from '../../../assets/logout.svg?react';
import Phone from '../../../assets/phone.svg?react';
import Context from '../../../loginContext';
import {jwtDecode} from 'jwt-decode';

const Sidebar = () => {
  // const ctx = useContext(Context)
const [details, setDetails] = useState({})

  useEffect(() => {
    const abcd = jwtDecode(sessionStorage.getItem('token'))
    if (sessionStorage.getItem('token') == undefined) {
      return;
    }

    console.log("abcd =>> ", abcd);
    setDetails(abcd);
  }, []);

  return (
    <div className={Classes.sidebarCover}>
      <nav className={Classes.navCover}>Vintage Guarantee</nav>
      <div className={Classes.sideProfileCover}>
        <img src={Ava} alt="profil" style={{objectFit: "contain", width: "35px", height: "37.06px"}} width={"35px"} height={"37.06px"} />
        <div className={Classes.logged_user_info}>
          <div className={Classes.logged_user_name} id="full_name">
          {/* {details.first_name ? details.first_name + " " + details.last_name : "..."} */}
          {details.full_name ? details.full_name : "..."}
          </div>
          <div className={Classes.logged_user_role} id="username">
            {details.username ? details.username: "..."}
          </div>
        </div>
        <div className={Classes.logged_user_toggler}>
          <div className={Classes.status_pill_green}></div>
        </div>
      </div>
      <div className={Classes.ulLinkCover}>
        <div className={Classes.subMenu}>Transaction Functions</div>
        <EachLink svg={<Dashboard />} to="home" name="Dashboard" />
        <EachLink
          svg={<Create />}
          to="create-investment"
          name="Create Investment"
        />
        <EachLink svg={<Retry />} name="Reinvest Earnings " to="reinvest" />
        <EachLink svg={<Request />} to="withdrawal" name="Request Withdrawal" />
        <EachLink
          svg={<List />}
          to="transaction-history"
          name="Transaction History"
        />
        {/* <div className={Classes.subMenu}>Transaction Functions</div> */}
        <div style={{marginTop: '14px'}} className={Classes.subMenu}>
          User account option
        </div>
        <EachLink svg={<Profile />} to="my-profile" name="My Profile" />
        <EachLink svg={<Referrals />} to="my-referral" name="My Referrals" />
        <div style={{marginTop: '14px'}} className={Classes.subMenu}>
          other links
        </div>
        {/* https://api.whatsapp.com/send/?phone= */}
        {/* <a className={Classes.mainSideLink} target='_blank' href={`https://api.whatsapp.com/send/?phone=+447852931943`}>
      <div className={Classes.svgMainCover}>
      <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1mocgkb-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="WhatsAppIcon"><path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path></svg>
       </div>
      <span className={Classes.span}>Whatsapp</span>
    </a> */}

    <a className={Classes.mainSideLink} target='_blank' href={`https://vintageguarantee.com/`}>
      <div className={Classes.svgMainCover}>
      <Home />
       </div>
      <span className={Classes.span}>Back to Homepage</span>
    </a>
         
    <a className={Classes.mainSideLink}   href={`https://vintageguarantee.com/`}>
      <div className={Classes.svgMainCover}>
      <Logout />
       </div>
      <span className={Classes.span}>Logout</span>
    </a>
      </div>
    </div>
  );
};

export default Sidebar;

const EachLink = ({svg, name, to}) => {
  return (
    <NavLink className={Classes.mainSideLink} to={`/${to}`}>
      <div className={Classes.svgMainCover}>{svg}</div>
      <span className={Classes.span}>{name}</span>
    </NavLink>
  );
};
