import React from 'react';
import Classes from './profile.module.css';
import {Link} from 'react-router-dom';
import Facebook from '../../assets/line.svg?react';
import Twitter from '../../assets/waa.svg?react';
import Decor from '../../assets/decor.svg?react';
import Logout from '../../assets/logout.svg?react';
import SecondSection from './secondSection';
import HelmetHERE from '../../component/helmet/helmet';

const Profile = ({details, ctx}) => {

  const clearLog = () => {
    sessionStorage.clear()
    window.location.replace("https://vintageguarantee.com")
  }



  return (
    <>
          <HelmetHERE title="My Profile" />
      <ul className={Classes.breadcrumb}>
        <li className={Classes.breadcrumb_item}>
          <Link to="/">Home</Link>
        </li>
        <li className={Classes.breadcrumb_item}>
          <Link to="/">User</Link>
        </li>
        <li className={Classes.breadcrumb_item}>
          <span>My Profile</span>
        </li>
      </ul>
      <div className={Classes.pageCover}>
        <div className={Classes.first}>
          <div className={Classes.up_head_w}>
            <div className={Classes.up_social}>
              
{/*               
              <Facebook
                style={{
                  fill: '#fff',
                  width: '20px',
                  borderRadius: '40px',
                  color: '#fff',
                  marginRight: '7px',
                }}
              />
              
        <a className={Classes.mainSideLink} style={{marginTop: "6px"}} target='_blank' href={`https://api.whatsapp.com/send/?phone=+447852931943`}>
              <Twitter
                style={{
                  fill: '#fff',
                  width: '17px',
                  borderRadius: '40px',
                  color: '#fff',
                }}
              />
              </a> */}
            </div>
            <div className={Classes.nameContain}>
              <div className={Classes.full_name}>
                {details.full_name
                  ? details.full_name
                  : '...'}
              </div>
              <div className={Classes.username}>
                {details.username ? details.username : '...'}
              </div>
            </div>
            <Decor style={{width: '100%'}} />
          </div>
          <div className={Classes.converTwo}>
            <div className={Classes.statusCover}>
              <div className={Classes.status}>status</div>
              <div className={Classes.online}>online</div>
            </div>
            <div onClick={clearLog} style={{cursor: "pointer"}} className={Classes.logout}>
              <Logout style={{width: '16px', fill: '#fff'}} />
              <div>Logout</div>
            </div>
          </div>

          <div className={Classes.up_contents}>
            <div className={Classes.m_b}>
              <div className={Classes.row_m_b}>
                <div className={Classes.col_sm_6}>
                  <div className={Classes.el_tablo}>
                    <div className={Classes.value}>${details && details?.balance}</div>
                    <div className={Classes.label}>Balance</div>
                  </div>
                </div>
                <div className={Classes.col_sm_6}>
                  <div className={Classes.el_tablo}>
                    <div className={Classes.value}>${details && details?.total_deposit}</div>
                    <div className={Classes.label}>Invested</div>
                  </div>
                </div>
              </div>
              <div className={Classes.padded}>
                <div className={Classes.friends_group}>
                  <small className={Classes.text_muted}>Email address </small>
                  <p id="email">{details.email
                  ? details.email
                  : '...'}</p>
                  <small className={Classes.text_muted}>Phone</small>
                  <p id="phone" style={{textTransform: "capitalize"}}>{details.phone
                  ? details.phone
                  : '...'}</p>
                  <small className={Classes.text_muted}>Country</small>
                  <p id="country" style={{textTransform: "capitalize"}}>{details.country
                  ? details.country
                  : '...'}</p>

                  <small className={Classes.text_muted}>Referral Link</small>
                  <p>
                    <a
                      id="ref"
                      href={`https://vintageguarantee.com?referral=${details.username}`}
                      style={{fontSize: '12px'}}
                    >
                      {`https://vintageguarantee.com?referral=${details.username}`}
                    </a>
                  </p>

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Classes.second}>
          <SecondSection details={details} />
        </div>
      </div>
    </>
  );
};

export default Profile;
