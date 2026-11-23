import React, { lazy, Suspense } from "react";
import Classes from "./body.module.css";
import Ava from "../../../assets/favicon.png";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "../../suspense/suspense";
const Home = lazy(() => import("../../../pages/home/eventHome"));
const Create = lazy(() =>
  import("../../../pages/createInvestment/eventCreateInvestment")
);
const Reinvest = lazy(() => import("../../../pages/reinvest/enventReinvest"));
const Withdraw = lazy(() =>
  import("../../../pages/withdrawal/eventWithdrawal")
);
const History = lazy(() => import("../../../pages/history/eventHistory"));
const Profile = lazy(() => import("../../../pages/profile/eventProfile"));
const Referral = lazy(() => import("../../../pages/referral/eventReferral"));

// import

const Body = () => {
  return (
    <div className={Classes.bodyCover}>
      <nav className={Classes.navCover}>
        <div className={Classes.navLeft}>
          <div className={Classes.logged_user_i}>
            <div className={Classes.avatar_w}>
              <img
                alt="Avatar Profile"
                src={Ava}
                style={{ objectFit: "cover", width: "35px", height: "37.06px" }}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className={Classes.pageCover}>
        <Routes>
          {/* <Redirect from="/" to="/home" exact /> */}
          <Route path="/" exact element={<Navigate replace to={"/home"} />} />
          <Route
            path="/home"
            // exact
            element={
              <Suspense fallback={<Loading />}>
                <Home />{" "}
              </Suspense>
            }
          />
          <Route
            exact
            path="/create-investment"
            element={
              <Suspense fallback={<Loading />}>
                <Create />{" "}
              </Suspense>
            }
          />
          <Route
            exact
            path="/reinvest"
            element={
              <Suspense fallback={<Loading />}>
                <Reinvest />
              </Suspense>
            }
          />
          <Route
            exact
            path="/withdrawal"
            element={
              <Suspense fallback={<Loading />}>
                <Withdraw />
              </Suspense>
            }
          />
          <Route
            exact
            path="/transaction-history"
            element={
              <Suspense fallback={<Loading />}>
                <History />
              </Suspense>
            }
          />
          <Route
            exact
            path="/my-profile"
            element={
              <Suspense fallback={<Loading />}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            exact
            path="/my-referral"
            element={
              <Suspense fallback={<Loading />}>
                <Referral />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Body;
