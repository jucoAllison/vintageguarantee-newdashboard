import React from 'react';
import { NavLink } from 'react-router-dom';
import Ava from '../../../assets/avatar1.jpg';
import Create from '../../../assets/create.svg?react';
import Dashboard from '../../../assets/dashboard.svg?react';
import Home from '../../../assets/home.svg?react';
import List from '../../../assets/list.svg?react';
import Logout from '../../../assets/logout.svg?react';
import Profile from '../../../assets/profile.svg?react';
import Referrals from '../../../assets/referral.svg?react';
import Request from '../../../assets/request.svg?react';
import Retry from '../../../assets/retry.svg?react';
import Classes from './sidebar.module.css';

const MobileSidebar = () => {
  return (
    <div className={Classes.sidebarCover}>
      <div className={Classes.sideProfileCover}>
        <img src={Ava} alt="profil" />
      </div>

      <div className={Classes.sideProfileCover}>
        <EachLink svg={<Dashboard style={{width: '25px'}} />} to="home" label="Dashboard" />
      </div>

      <div className={Classes.sideProfileCover}>
        <EachLink
          svg={<Create style={{width: '25px'}} />}
          to="create-investment"
          label="Create Investment" 
        />
      </div>
      <div className={Classes.sideProfileCover}>
        <EachLink svg={<Retry style={{width: '25px'}} />} to="reinvest" label="Reinvest" strongStyle={{left: "-5px"}} />
      </div>
      <div className={Classes.sideProfileCover}>
        <EachLink svg={<Request style={{width: '25px'}} />} to="withdrawal"  label="Withdrawal" />
      </div>
      <div className={Classes.sideProfileCover}>
        <EachLink
          svg={<List style={{width: '25px'}} />}
          to="transaction-history"
          label="Transaction History"
        />
      </div>
      <div className={Classes.sideProfileCover}>
        <EachLink svg={<Profile style={{width: '25px'}} />} to="my-profile" label="My Profile" />
      </div>
      <div className={Classes.sideProfileCover}>
        <EachLink
          svg={<Referrals style={{width: '25px'}} />}
          to="my-referral"
          name="My Referrals"
          label="My Referrals"
        />
      </div>
      <div className={Classes.sideProfileCover}>

      {/* <a className={Classes.mainSideLink} target='_blank' href={`https://api.whatsapp.com/send/?phone=+447852931943`}>
      <div style={{position: "relative"}} className={Classes.svgMainCover}>
      <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1mocgkb-MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="WhatsAppIcon"><path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path></svg>
      <strong style={{fontSize: "9px", bottom: "-8px", position:"absolute", left: "-7px", textAlign: "center"}}>Whatsapp</strong>
       </div>
    </a> */}
</div>
      <div className={Classes.sideProfileCover}>

    <a className={Classes.mainSideLink} target='_blank' href={`https://vintageguarantee.com`}>
      <div style={{position: "relative"}} className={Classes.svgMainCover}>
      <Home />
      <strong style={{fontSize: "9px", bottom: "-8px", position:"absolute", left: "-1px", textAlign: "center"}}>Home</strong>
       </div>
    </a>
    </div>
    <div className={Classes.sideProfileCover}>
    
    <a className={Classes.mainSideLink}   href={`https://vintageguarantee.com`}>
      <div style={{position: "relative"}} className={Classes.svgMainCover}>
      <Logout />
      <strong style={{fontSize: "9px", bottom: "-8px", position:"absolute", left: "-1px", textAlign: "center"}}>Logout</strong>
       </div>
    </a>
    </div>
    
    </div>
  );
};

export default MobileSidebar;

const EachLink = ({label, svg, name, to, strongStyle}) => {
  return (
    <NavLink style={{display: "block"}} className={Classes.mainSideLink} to={`/${to}`}>
      <div style={{marginLeft: '2px', position: "relative"}} className={Classes.svgMainCover}>
        {svg}
      <strong style={{fontSize: "9px", position:"absolute", left: "-10px", textAlign: "center", ...strongStyle}}>{label}</strong>
      </div>
    </NavLink>
  );
};
