import React, {useContext, useRef, useState} from 'react';
import Classes from './secondSection.module.css';
import Key from '../../assets/key.svg?react';
import User from '../../assets/user.svg?react';
import Context from '../../loginContext';
import PersonalWallet from './personalWallet';

const SecondSection = ({details}) => {
  const ctx = useContext(Context);
  const oldPassRef = useRef();
  const newPassRef = useRef();
  const comPassRef = useRef();
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState('');
  const [addressLoading, setAddressLoading] = useState(false);
  const [addressMsg, setAddressMsg] = useState('');
  const [isWallet, setIsWallet] = useState(false);
  const [address, setAddress] = useState({
    btc: '',
    eth: '',
    doge: '',
    bnb: '',
    safe: '',
    vet: '',
    shib: '',
    lite: '',
  });


  const submitNewPassword = async (e) => {
    e.preventDefault();
    if (comPassRef.current.value !== newPassRef.current.value) {
      setTimeout(() => {
        setMsg('');
      }, 2000);
      setMsg('Check passwords');
      return;
    }
    if (loading) {
      return;
    }
    setLoading(true);
    const fetchAwait = await fetch(`${ctx.url}user/action/edit-info/password`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `bearer ${sessionStorage.getItem('token')}`,
      }),
      body: JSON.stringify({
        old_password: oldPassRef.current.value,
        new_password: newPassRef.current.value,
      }),
    });
    const fetchJson = await fetchAwait.json();
    setLoading(false);
    if (fetchJson.error) {
      setTimeout(() => {
        setMsg('');
      }, 2000);
      setMsg(fetchJson.msg);
      return;
    }
    setTimeout(() => {
      setMsg('');
    }, 2000);
    setMsg(fetchJson.msg);
  };

  return (
    <>
      <div className={Classes.element_wrapper}>
        <div className={Classes.element_box}>
          <form onSubmit={submitNewPassword}>
            <div className={Classes.element_info}>
              <div class={Classes.element_info_with_icon}>
                <div class={Classes.element_info_icon}>
                  <Key style={{width: '29px', fill: '#24262d'}} />
                </div>
                <div class={Classes.element_info_text}>
                  <h5 class={Classes.element_inner_header}>Change Password</h5>
                  <div class={Classes.element_inner_desc}>
                    To change your password, kindly enter your old password,
                    followed by your new password twice. You are advised to
                    chose a very strong password
                  </div>
                </div>
              </div>
            </div>
            <div class={Classes.form_group}>
              <label> Old Password</label>
              <input
                class={Classes.form_control}
                data-error="Kindly enter your old password"
                ref={oldPassRef}
                id="OldPassword"
                placeholder="Current Password"
                required
                name="oldpassword"
                type="password"
              />
              <div className="help-block form-text with-errors form-control-feedback"></div>
            </div>
            <div class={Classes.row}>
              <div class={Classes.col_sm_6}>
                <div class={Classes.form_group}>
                  <label> Password</label>
                  <input
                    class={Classes.form_control}
                    id="NewPassword"
                    placeholder="New Password"
                    required
                    ref={newPassRef}
                    name="password1"
                    autoComplete="off"
                    type="password"
                  />
                  <div class={Classes.help_block}>Minimum of 6 characters</div>
                </div>
              </div>
              <div class={Classes.col_sm_6}>
                <div class={Classes.form_group}>
                  <label>Confirm Password</label>
                  <input
                    class={Classes.form_control}
                    ref={comPassRef}
                    placeholder="Confirm Password"
                    required
                    type="password"
                    name="password2"
                  />
                  <div class={Classes.help_block}></div>
                </div>
              </div>
            </div>
            <div className={Classes.errorMsg}>{msg}</div>

            <div class={Classes.form_buttons_w}>
              <button
                // id="submitToChangePassword"
                // name="updateData"
                class={Classes.btn_primary}
                type="submit"
              >
                {loading ? '...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={Classes.element_wrapper}>
        <div className={Classes.element_box}>
          <PersonalWallet details={details} />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
