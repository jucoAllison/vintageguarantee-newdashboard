import React, {useContext, useEffect, useState} from 'react';
import Context from '../../loginContext';
import toast, {Toaster} from 'react-hot-toast';
import css from './makedeposit.module.css';
const {box, bg} = css;

const WithrawalList = () => {
  const ctx = useContext(Context);
  const [loading, setLoading] = useState(false);
  let [list, setList] = useState([]);
  const [wallet, setWallet] = useState([]);
  let [filterList, setFilterList] = useState([]);

  const getWithdrawals = () => {
    // let ID = toast.loading('Loading user deposit.')
    fetch(`${ctx.url}user/action/withdraw-list`, {
      headers: new Headers({
        'content-type': 'application/json',
        authorization: 'bearer ' + sessionStorage.getItem('token'),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // toast.dismiss(ID)
        // setList(res.allDepositByUser?.filter((v) => v.plan.includes(name)));
        console.log(
          'res.allDepositByUser?.filter((v) => v.plan.includes(name)) => ',
          res
        );
        setList(res.allWithdrawalByUser);
        setWallet(res.wallet.wallets);
      })
      .catch((e) => {
        console.log(e);
        toast.error('opps!!, an error occurred.');
        // toast.dismiss(ID)
      });
  };

  useEffect(() => {
    getWithdrawals();
  }, []);

  return (
    <div>
      <div className="container">
        {wallet.map((v, i) => (
          <PlanBox name={v.wallet} list={list} key={i} />
        ))}
      </div>
    </div>
  );
};

export default WithrawalList;

const PlanBox = ({name, list}) => {
  const ctx = useContext(Context);
  // let [list, setList] = useState([]);
  let [filterList, setFilterList] = useState([]);

  useEffect(() => {
    setFilterList(
      list?.filter((v) => v.wallet.wallet?.toLowerCase().includes(name.toLowerCase()))
    );
  }, [name]);


  // console.log("filterList ==>> ", filterList);

  return (
    <section className={box}>
      {/* <p>&#160;</p> */}
      <div style={{paddingLeft: '1em', paddingBottom: '10px', paddingTop: "10px"}}>
        <strong style={{paddingLeft: '1em'}}>{name.toUpperCase()} WITHDRAWAL</strong>
      </div>

      <div className={css.coverRow} style={{gridTemplateColumns: ".3fr 1fr .3fr"}}>
        <div>($) Amount</div>
        <div>Address</div>
        <div>Date</div>
      </div>

      <div
        className={css.coverRow}
        style={{
          backgroundColor: 'transparent',
          padding: '0.3em',
          color: '#000',
          gridTemplateColumns: ".3fr 1fr .3fr"
        }}
      >
        {filterList.map((v) => (
          <React.Fragment key={v._id}>
            <div style={{paddingLeft: "20px"}}>${v.amount}</div>
            <div style={{paddingLeft: '1em'}}>{v?.wallet?.address}</div>
            <div span={4}>{v.date.split(',')[0]}</div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

// asdasds;
