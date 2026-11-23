import React, {useContext, useRef, useState} from 'react';
import Classes from './reinvest.module.css';
import {Link} from 'react-router-dom';
import EachBox from '../../component/eachBox/eachBox';
import Eachheader from '../../component/eachheader/eachheader';
import Skeleton from 'react-loading-skeleton';
import HelmetHERE from '../../component/helmet/helmet';

const Reinvest = React.memo(({
  details,
  loading,
  submitFormHandler,
  plans,
  selectPlanRef,
  decoded,
  setSelectCoinRefHandler,
  wallets,
  msg,
  ctx,
  setSelectPlanRefHandler,
  inputAmountRef,
  setInputAmountRef,
  data,
}) => {
  const topLoading = false

  return (
    <>
      <ul className={Classes.breadcrumb}>
              <HelmetHERE title="Reinvest Earnings" />
        <li className={Classes.breadcrumb_item}>
          <Link to="/">Home</Link>
        </li>
        <li className={Classes.breadcrumb_item}>
          <Link to="/">User</Link>
        </li>
        <li className={Classes.breadcrumb_item}>
          <span>Reinvest</span>
        </li>
      </ul>
      <div className={Classes.pageCover}>
        <Eachheader header_name="Account Overview" />
        <div className={Classes.gridBoxes}>
          {topLoading ? (
            <>
              <Skeleton
                width={250}
                style={{borderRadius: '10px'}}
                height={170}
              />
              <Skeleton
                width={250}
                style={{borderRadius: '10px', marginRight: '30px'}}
                height={170}
              />
            </>
          ) : (
            <>
          <EachBox value={`$${decoded.balance ? decoded.balance : 0}`} label="account balance" />
          <EachBox value={`$${decoded.total_withdrawal ? decoded.total_withdrawal : 0}`} label="total withdrawal" />
              
              
            </>
          )}
        </div>

        <div className={Classes.flexTwo}>
          <div>
            <Eachheader header_name="Reinvest Earning" />

            <div className={Classes.element_wrapper}>
              <div className={Classes.element_box} style={{minHeight: '445px'}}>
                <form onSubmit={submitFormHandler}>
                  <h5 className={Classes.form_header}>Funds Reinvestment</h5>
                  <div className={Classes.headerBold}>${decoded.balance ? decoded.balance : 0}</div>
                  <div className={Classes.form_desc}>
                    You can request to reinvest your earnings by filling the
                    reinvestment form below. Funds will be reinvested to your
                    account as soon as your reinvest request is confirmed
                  </div>

                  <div className={Classes.form_group}>
                    <div
                      style={{marginTop: '10px'}}
                      className={Classes.col_sm_8}
                    >
                      {loading ? (
                        <Skeleton
                          width={350}
                          style={{borderRadius: '1px', marginRight: '30px'}}
                          height={35}
                        />
                      ) : (
                        <select
                          onChange={setSelectPlanRefHandler}
                          className={Classes.form_control}
                        >
                          <option>Select plan</option>
                          {plans.map((v, i) => (
                            <option key={i}>{v?.name}</option>
                          ))}
                        </select>
                      )}
                    </div>
                    <div
                      style={{marginTop: '10px'}}
                      className={Classes.col_sm_8}
                    >
                      {loading ? (
                        <Skeleton
                          width={350}
                          style={{borderRadius: '1px', marginRight: '30px'}}
                          height={35}
                        />
                      ) : (
                        <select
                          onChange={setSelectCoinRefHandler}
                          className={Classes.form_control}
                        >
                          <option>Select coin</option>
                          {wallets.map((v, i) => (
                            <option key={i}>{v.wallet}</option>
                          ))}
                        </select>
                      )}
                    </div>

                    <div
                      style={{marginTop: '10px'}}
                      className={Classes.col_sm_8}
                    >
                      {loading ? (
                        <Skeleton
                          width={350}
                          style={{borderRadius: '1px', marginRight: '30px'}}
                          height={35}
                        />
                      ) : (
                        <input
                          value={inputAmountRef}
                          onChange={e => setInputAmountRef(e.target.value)}
                          required
                          className={Classes.form_control}
                          name="amount"
                          placeholder="Amount to reinvest"
                          type="number"
                        />
                      )}
                    </div>
                  </div>

                  <div className={Classes.form_buttons_w}>
                    <div className={Classes.msgCoverContain}>{msg}</div>
                    <button
                      className={Classes.btn_success}
                      disabled={loading}
                      type="submit"
                    >
                      {loading ? '...' : 'Reinvest Now'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <div style={{width: '270px !important'}}></div> */}
        </div>
      </div>
    </>
  );
});

export default Reinvest;
