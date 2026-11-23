import React, {useContext, useEffect, useRef, useState} from 'react';
import Classes from './secondSection.module.css';
import Key from '../../assets/key.svg?react';
import User from '../../assets/user.svg?react';
import Context from '../../loginContext';

const PersonalWallet = ({details}) => {
  const ctx = useContext(Context);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState('');
  const [addressLoading, setAddressLoading] = useState(false);
  const [addressMsg, setAddressMsg] = useState('');
  const [isWallet, setIsWallet] = useState(false);
  const [inputs, setInputs] = useState({...details});
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

  // console.log("inputs?.full_name!! =>> ", inputs?.full_name);
  // console.log("inputs!! =>> ", inputs);
  // console.log("details!! =>> ", details);

  const handleUnchange = (e) => {
    const spread = {...address};
    spread[e.target.name] = e.target.value;
    setAddress(spread);
  };

  const onSubmitWallets = async (e) => {
    e.preventDefault();
    if (addressLoading) {
      return;
    } else if (isWallet) {
      updateWallet();
    } else {
      try {
        setAddressLoading(true);
        const fetchAwait = await fetch(`${ctx.url}user/action/edit-info/profile`, {
          method: 'PUT',
          headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: `bearer ${sessionStorage.getItem('token')}`,
          }),
          body: JSON.stringify({
            full_name: inputs.full_name,
            phone: inputs.phone,
            country: inputs.country,
          }),
        });
        const fetchJson = await fetchAwait.json();
        // console.log("fetchJson => ", fetchJson);
        ctx.setDate(fetchJson.data);
      sessionStorage.setItem('token', fetchJson.data);  
        console.log("fetchJson => ", fetchJson);
        setAddressLoading(false);
      } catch (error) {
        console.log('error => ', error);
      }
    }
  };

  const updateWallet = async () => {
    setAddressLoading(true);
    const fetchAwait = await fetch(`${ctx.url}user/edit/wallet`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `bearer ${sessionStorage.getItem('token')}`,
      }),
      body: JSON.stringify({
        shiba_wallet: address.shib,
        safemoon_wallet: address.safe,
        bitcoin_wallet: address.btc,
        bnb_wallet: address.bnb,
        litecoin_wallet: address.lite,
        doge_wallet: address.doge,
        ve_wallet: address.vet,
        ethereum_wallet: address.eth,
      }),
    });
    const fetchJson = (await fetchAwait).json();
    setAddressLoading(false);
    if (fetchJson.error) {
      // return alert(fetchJson.msg)
      return setAddressMsg(fetchJson.error);
    }
    // alert(fetchJson.data)
    setAddressMsg(fetchJson.data);
  };

  useEffect(() => {
    setInputs(details)
  },[details]);

  // console.log("ctx => ", ctx);

  return (
    <form onSubmit={onSubmitWallets}>
      <div className={Classes.element_info} style={{marginBottom: '.3em'}}>
        <div className={Classes.element_info_with_icon}>
          <div className={Classes.element_info_icon}>
            <User style={{width: '29px', fill: '#24262d'}} />
          </div>
          <div className={Classes.element_info_text}>
            <h5 className={Classes.element_inner_header}>Profile</h5>
            <div class={Classes.element_inner_desc}>
              Update your profile information, email and username can't be updated 
            </div>
          </div>
        </div>
      </div>
      
      
      {!isWallet && (
        <>
          <div className={Classes.row}>
            <div className={Classes.col_sm_6}>
              <div className={Classes.form_group}>
                <label>Full Name</label>
                <input
                  className={Classes.form_control}
                  onChange={(e) =>
                    setInputs({...inputs, full_name: e.target.value})
                  }
                  value={inputs?.full_name}
                />
                <div className={Classes.help_block}></div>
              </div>
            </div>
            <div className={Classes.col_sm_6}>
              <div className={Classes.form_group}>
                <label>Phone</label>
                <input
                  className={Classes.form_control}
                  onChange={(e) =>
                    setInputs({...inputs, phone: e.target.value})
                  }
                  value={inputs?.phone}
                />
                <div className={Classes.help_block}></div>
              </div>
            </div>
          </div>

          <div className={Classes.row}>
            <div className={Classes.col_sm_6}>
              <div className={Classes.form_group}>
                <label style={{color: '#bbb'}}>Email</label>
                <input
                  style={{color: '#bbb'}}
                  className={Classes.form_control}
                  readOnly
                  onChange={(e) =>
                    setInputs({...inputs, email: e.target.value})
                  }
                  value={inputs?.email}
                />
                <div className={Classes.help_block}></div>
              </div>
            </div>
            <div className={Classes.col_sm_6}>
              <div className={Classes.form_group}>
                <label style={{color: '#bbb'}}>Username</label>
                <input
                  className={Classes.form_control}
                  style={{color: '#bbb'}}
                  readOnly
                  onChange={(e) =>
                    setInputs({...inputs, username: e.target.value})
                  }
                  value={inputs?.username}
                />
                <div className={Classes.help_block}></div>
              </div>
            </div>
          </div>

          <div className={Classes.row}>
            <div className={Classes.col_sm_6}>
              <div className={Classes.form_group}>
                <label>Country</label>
                <input
                  className={Classes.form_control}
                  onChange={(e) =>
                    setInputs({...inputs, country: e.target.value})
                  }
                  value={inputs?.country}
                />
                <div className={Classes.help_block}></div>
              </div>
            </div>
          </div>
        </>
      )}
      
      

      <div className={Classes.errorMsg}>{addressMsg}</div>

      <div className="form-buttons-w">
        <button class={Classes.btn_primary} type="submit">
          {addressLoading ? '...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default PersonalWallet;
