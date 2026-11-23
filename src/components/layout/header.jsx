import React, { useContext, useEffect, useState } from "react";
import Logo1 from "../../images/logo-sm.png";
import Logo2 from "../../images/logo-dark.png";
import User1 from "../../images/user-1.jpg";
import { NavLink } from "react-router-dom";
import { MainContext } from "../../App";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const CTX = useContext(MainContext)

  useEffect(() => {
    window.addEventListener("click", () => {
        setToggle(false)  
    })
  
    return () => {
      window.removeEventListener("click",  () => {
        setToggle(false)  
    })
    }
  }, [])
  

  return (
    <header id="topnav">
      <div className="navbar-custom">
        <div className="container-fluid">
          <ul className="list-unstyled topnav-menu float-right mb-0">
            <li
              onClick={() => setIsLinkOpen(!isLinkOpen)}
              className="dropdown notification-list"
            >
              <a
                className={
                  isLinkOpen
                    ? "navbar-toggle nav-link open"
                    : "navbar-toggle nav-link"
                }
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </li>

            <li
              onClick={(e) => {
                e.stopPropagation()
                setToggle(!toggle)}}
              className={
                toggle
                  ? "dropdown notification-list show"
                  : "dropdown notification-list"
              }
            >
              <a
                className="nav-link dropdown-toggle nav-user mr-0 waves-effect"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img src={User1} alt="user-image" className="rounded-circle" />
                <span className="pro-user-name ml-1">
                  cee3243 <i className="mdi mdi-chevron-down"></i>
                </span>
              </a>
              <div
                onClick={(e) => e.stopPropagation()}
                className={
                  toggle
                    ? "dropdown-menu dropdown-menu-right profile-dropdown show"
                    : "dropdown-menu dropdown-menu-right profile-dropdown "
                }
              >
                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome cee3243!</h6>
                </div>

                <NavLink to="/portfolio" className="dropdown-item notify-item">
                  <i className="fe-user"></i>
                  <span>My Account</span>
                </NavLink>

                <NavLink to="/user/account/profile" className="dropdown-item notify-item">
                  <i className="fe-settings"></i>
                  <span>Settings</span>
                </NavLink>

                <div className="dropdown-divider"></div>

                <a href="#" onClick={CTX.logout()} className="dropdown-item notify-item">
                  <i className="fe-log-out"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>

          <div className="logo-box">
            <NavLink to="/portfolio" className="logo text-center">
              <span className="logo-lg">
                <img src={Logo2} alt="" height="18" />
              </span>
              <span className="logo-sm">
                <img src={Logo1} alt="" height="24" />
              </span>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="topbar-menu">
        <div className="container-fluid">
          <div
            id="navigation"
            style={{ display: isLinkOpen ? "block" : "none" }}
          >
            <ul className="navigation-menu">
              <li>
                <NavLink to="/portfolio">
                  <i className="fe-airplay"></i>Dashboard{" "}
                </NavLink>
              </li>

              <li>
                <NavLink to="/user/account/deposit">
                  <i className="fe-briefcase"></i>Deposit
                </NavLink>
              </li>
              <li>
                <NavLink to="/user/account/deposit/list">
                  <i className="fe-layers"></i>Deposit List
                </NavLink>
              </li>
              <li>
                <NavLink to="/user/account/withdrawal">
                  {" "}
                  <i className="fe-share"></i>Withdraw
                </NavLink>
              </li>
              <li className="last-elements">
                <a href="?a=referallinks">
                  <i className="fe-grid"></i>Running Deposits{" "}
                </a>
              </li>
              <li>
                <NavLink to="/user/account/profile">
                  {" "}
                  <i className="fe-user-plus"></i>Profile
                </NavLink>
              </li>

              <li className="has-submenu">
                <NavLink to="/user/account/running/history">
                  <i className="fe-rotate-cw"></i>History{" "}
                  <div className="arrow-down"></div>
                </NavLink>
                {/* <ul className="submenu">
                  <li>
                    <a href="?a=deposit_history">Deposit History</a>
                  </li>
                  <li>
                    <a href="?a=earnings">Earnings History</a>
                  </li>

                  <li>
                    <a href="?a=withdraw_history">Withdrawals History</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <NavLink to="/user/account/referral">
                  <i className="fe-users"></i>Referrals{" "}
                </NavLink>
              </li>
              
              <li className="last-elements">
                <NavLink to="/user/account/security">
                  <i className="fe-shield"></i>Security
                </NavLink>
              </li>
            </ul>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
