// import React, {useEffect, useState, useContext} from 'react';
// import toast, {Toaster} from 'react-hot-toast';
// import bitcoin_icon from '../../assets/btc_image.png';
// import css from './makedeposit.module.css';
// import Context from '../../loginContext';
// const {box, bg} = css;

// export default function DepositList({loadingWallet, wallets, plans}) {
//   // console.log('plans => ', plans);

//   return (
//     <div>
//       <div>
//         {/* next section  */}
//         <div className="container">
//           {plans.map((v, i) => (
//             <PlanBox name={v.name} key={i} time={v.time} rio={v.rio} />
//           ))}
//         </div>
//       </div>
//       <Toaster />
//     </div>
//   );
// }

// const PlanBox = ({name, time, rio}) => {
//   const ctx = useContext(Context);
//   let [list, setList] = useState([]);
//   let [filterList, setFilterList] = useState([]);

//   const FetchDepositList = () => {
//     // let ID = toast.loading('Loading user deposit.')
//     fetch(`${ctx.url}user/action/deposit-list`, {
//       headers: new Headers({
//         'content-type': 'application/json',
//         authorization: 'bearer ' + sessionStorage.getItem('token'),
//       }),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         // toast.dismiss(ID)
//         // setList(res.allDepositByUser?.filter((v) => v.plan.includes(name)));
//         // console.log("res.allDepositByUser?.filter((v) => v.plan.includes(name)) => ", res.allDepositByUser);
//         setList(res.allDepositByUser);
//       })
//       .catch((e) => {
//         console.log(e);
//         toast.error('opps!!, an error occured.');
//         // toast.dismiss(ID)
//       });
//   };

//   useEffect(() => {
//     FetchDepositList();
//   }, []);

//   useEffect(() => {
//     setFilterList(list?.filter((v) => v.plan.includes(name.toLowerCase())))
//   },[name, time, rio])

//   return (
//     <section className={box}>
//       <p>&#160;</p>
//       <div style={{paddingLeft: '1em'}}>
//         {/* <input type={"radio"} name="investment_plan" /> */}
//         <label style={{paddingLeft: '1em'}}>
//           {' '}
//           <span id="percent" style={{paddingRight: '.4em'}}>
//             {' '}
//             {rio}%{' '}
//           </span>
//           After {time} Hours
//         </label>
//       </div>

//       <div className={css.coverRow}>
//         <div>{name} Plan</div>
//         <div>Deposit Amount</div>
//         <div>Date</div>
//       </div>

//       <div
//         className={css.coverRow}
//         style={{
//           backgroundColor: 'transparent',
//           padding: '0.3em',
//           color: '#000',
//         }}
//       >
//         {filterList.map((v) => (
//           <React.Fragment key={v._id}>
//             <div style={{paddingLeft: '1em'}}>{v.plan}</div>
//             <div span={7}>{v.amount}</div>
//             <div span={4}>{v.date.split(',')[0]}</div>
//             <div span={4}> </div>
//           </React.Fragment>
//         ))}
//       </div>

//     </section>
//   );
// };

import React, { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";
import css from "./makedeposit.module.css";
import MainContext from "../../loginContext";
import LoadingSuspe from "../../component/suspense/suspense";
const { box, bg, noProducts, insideBox } = css;

export default function DepositList({ loadingWallet, wallets, plans }) {
  // console.log('plans => ', plans);
  const ctx = useContext(MainContext);
  let [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const FetchDepositList = () => {
    // let ID = toast.loading('Loading user deposit.')
    setLoading(true);
    fetch(`${ctx.url}user/action/deposit-list`, {
      headers: new Headers({
        "content-type": "application/json",
        authorization: "bearer " + sessionStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // toast.dismiss(ID)
        // setList(res.allDepositByUser?.filter((v) => v.plan.includes(name)));
        // console.log("res.allDepositByUser?.filter((v) => v.plan.includes(name)) => ", res.allDepositByUser);
        setList(res.allDepositByUser);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
        toast.error("opps!!, an error occured.");
        // toast.dismiss(ID)
      });
  };

  useEffect(() => {
    FetchDepositList();
  }, []);

  return (
    <div>
      <div>
        {/* next section  */}
        <div className="container">
          {loading ? (
            <div style={{ position: "relative", marginTop: "150px" }}>
              {" "}
              <LoadingSuspe />
            </div>
          ) : (
            <>
              {list?.length > 0 ? (
                <>
                  {plans.map((v, i) => (
                    <PlanBox
                      name={v.name}
                      list={list}
                      perc={v.rio}
                      duration={v.time}
                      key={i}
                    />
                  ))}
                </>
              ) : (
                <div className={noProducts}>
                  <p>No records found</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const PlanBox = ({ list, name, perc, duration }) => {
  let [filterList, setFilterList] = useState([]);

  useEffect(() => {
    setFilterList(
      list?.filter((v) => v.plan.toLowerCase().indexOf(name.toLowerCase()) >= 0)
    );
  }, [name, list]);

  return (
    <section className={box}>
      <div className={insideBox}>
        <p>&#160;</p>
        <div style={{ paddingLeft: "1em" }}>
          {/* <input type={"radio"} name="investment_plan" /> */}
          <label style={{ paddingLeft: "1em" }}>
            {" "}
            <span id="percent" style={{ paddingRight: ".4em" }}>
              {" "}
              {perc}%{" "}
            </span>
            After {duration} hours
          </label>
        </div>

        <div className={css.coverRow}>
          <div style={{ justifySelf: "center" }}>{name} </div>
          <div>Deposit Amount</div>
          <div>Date</div>
        </div>

        <div
          className={css.coverRow}
          style={{
            backgroundColor: "transparent",
            padding: "0.3em",
            color: "#000",
          }}
        >
          {filterList.map((v) => (
            <React.Fragment key={v._id}>
              {/* <div style={{
          borderBottom: "1px solid #25252549"
        ,marginTop: "10px", paddingLeft: '1em', textTransform: "capitalize", fontWeight: "bold"}}>{v.plan}</div> */}

              {v?.pending ? (
                <div
                  style={{
                    position: "relative",
                    color: "rgb(172, 167, 168)",
                    backgroundColor: "rgb(228, 223, 222)",
                  }}
                  className={css.statusCoverHERE}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "-6px",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    {v.remark === "reinvestment" ? v.remark : ""}
                  </div>
                  PENDING
                </div>
              ) : v.remark === "cancelled" ? (
                <div
                  style={{
                    position: "relative",
                    color: "#f25961",
                    backgroundColor: "#f2596177",
                  }}
                  className={css.statusCoverHERE}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "-6px",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    {v.remark === "reinvestment" ? v.remark : ""}
                  </div>
                  cancelled
                </div>
              ) : (
                <div
                  style={{
                    position: "relative",
                    color: "#0c5a56",
                    backgroundColor: "#0c5a5677",
                  }}
                  className={css.statusCoverHERE}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "-6px",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    {v.remark === "reinvestment" ? v.remark : ""}
                  </div>
                  Approved
                </div>
              )}
              <div
                span={7}
                style={{
                  borderBottom: "1px solid #25252549",
                  marginTop: "10px",
                }}
              >
                ${v.amount}
              </div>
              <div
                style={{
                  borderBottom: "1px solid #25252549",
                }}
                span={4}
              >
                <div>{v.date.split(",")[0]}</div>
                <div>{v.date.split(",")[1]}</div>
              </div>
              {/* <div span={4}> </div> */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
