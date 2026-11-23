import React, {useContext, useRef, useState} from 'react';
import Classes from '../reinvest/reinvest.module.css';
import {Link} from 'react-router-dom';
import EachBox from '../../component/eachBox/eachBox';
import Eachheader from '../../component/eachheader/eachheader';
import Context from '../../loginContext';
import Skeleton from 'react-loading-skeleton';
import HelmetHERE from '../../component/helmet/helmet';

const Withdrawal = React.memo(({
  decoded,
  plans,
  inputAmoutWithRef,
  inputAddressWithRef,
  selectAmoutWithRef,
  msg,
  submitWithdrawal
}) => {
  const loading = false;


  // console.log(ctx);

  return (
    <>
      <HelmetHERE title="Request Withdrawal" />
      <ul className={Classes.breadcrumb}>
        <li className={Classes.breadcrumb_item}>
          <Link to="/">Home</Link>
        </li>
        <li className={Classes.breadcrumb_item}>
          <Link to="/">User</Link>
        </li>
        <li className={Classes.breadcrumb_item}>
          <span>Withdrawal</span>
        </li>
      </ul>
      <div className={Classes.pageCover}>
        <Eachheader header_name="Account Overview" />
        <div className={Classes.gridBoxes}>
          {loading ? (
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
          <EachBox value={`$${decoded.total_withdrawal ? decoded?.total_withdrawal : 0}`} label="total withdrawal" />
          <EachBox value={decoded.pending_withdrawal ? decoded.pending_withdrawal : 0} label="pending withdrawal" />

            </>
          )}
        </div>

        <div className={Classes.flexTwo}>
          <div style={{marginRight: '20px'}}>
            <Eachheader header_name="Create Withdrawal" />

            <div class={Classes.element_wrapper}>
              <div class={Classes.element_box} style={{minHeight: '445px'}}>
                <form onSubmit={submitWithdrawal}>
                  <h5 class={Classes.form_header}>Funds Withdrawal</h5>
                  <div class={Classes.form_desc}>
                    You can request a withdrawal by filling the withdrawal form
                    below. Funds will be credited to your wallet as soon as your
                    withdrawal is confirmed
                  </div>

                  <div class={Classes.form_group}>
                    <label class={Classes.col_form_label}>
                      Amount to withdraw
                    </label>
                    <div class={Classes.col_sm_8}>
                      {loading ? (
                        <Skeleton
                          width={350}
                          style={{borderRadius: '1px', marginRight: '30px'}}
                          height={35}
                        />
                      ) : (
                        <input
                          id="reInvestInputID"
                          class={Classes.form_control}
                          name="amount"
                          ref={inputAmoutWithRef}
                          type="number"
                        />
                      )}
                    </div>
                    <div
                      style={{marginTop: '20px', textTransform: 'capitalize'}}
                      class={Classes.col_sm_8}
                    >
                      {loading ? (
                        <Skeleton
                          width={350}
                          style={{borderRadius: '1px', marginRight: '30px'}}
                          height={35}
                        />
                      ) : (
                        <select
                          ref={selectAmoutWithRef}
                          class={Classes.form_control}
                        >
                          <option style={{textTransform: 'capitalize'}}>
                            Select wallet
                          </option>
                          {plans.map((v, i) => (
                            <option key={i}>{v?.wallet}</option>
                          ))}
                        </select>
                      )}
                    </div>
                    <div class={Classes.form_group} style={{marginTop: '20px'}}>
                      <label class={Classes.col_form_label}>
                        Wallet Address
                      </label>
                      <div class={Classes.col_sm_8}>
                        {loading ? (
                          <Skeleton
                            width={350}
                            style={{borderRadius: '1px', marginRight: '30px'}}
                            height={35}
                          />
                        ) : (
                          <input
                            id="reInvestInputID"
                            class={Classes.form_control}
                            name="amount"
                            ref={inputAddressWithRef}
                            type="text"
                          />
                        )}
                      </div>
                    </div>

                    {/* <div class={Classes.form_group}>
                    <label class={Classes.col_form_label}>
                      Wallet Address
                    </label>
                    <div class={Classes.col_sm_8}>
                      { loading ?  <Skeleton
                          width={350}
                          style={{borderRadius: '1px', marginRight: '30px'}}
                          height={35}
                        /> : <input
                        id="reInvestInputID"
                        class={Classes.form_control}
                        name="amount"
                        ref={inputAddressWithRef}
                        type="text"
                      />}
                    </div>
                    </div> */}
                  </div>

                  <div className={Classes.msgCoverContain}>{msg}</div>
                  <div class={Classes.form_buttons_w}>
                    <button class={Classes.btn_success} type="submit">
                      {loading ? '...' : 'Withdraw'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div style={{width: '220px'}}></div>
        </div>
      </div>
    </>
  );
});

export default Withdrawal;
