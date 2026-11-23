import React, { lazy, Suspense, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainContext } from "../../App";
import Footer from "./footer";
import Loading from "../suspense/suspense";
import Header from "./header";

const EventDeposit_list = lazy(() =>
  import("../../pages/deposit_list/eventDeposit_list")
);
const EventHistory = lazy(() => import("../../pages/history/eventHistory"));
const EventProfile = lazy(() => import("../../pages/profile/eventProfile"));
const EventReferals = lazy(() => import("../../pages/referals/eventReferals"));
const EventSecurity = lazy(() => import("../../pages/security/eventSecurity"));
const EventWithdraw = lazy(() => import("../../pages/withdraw/eventWithdraw"));
const EventHome = lazy(() => import("../../pages/home/eventHome"));
const EventDeposit = lazy(() => import("../../pages/deposit/eventDeposit"));
const Layout = () => {
  const CTX = useContext(MainContext);

  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          {CTX.token && (
            <Route
              path="/"
              exact
              element={<Navigate replace to={"/portfolio"} />}
            />
          )}

          {CTX.token && (
            <Route
              path="/portfolio"
              element={
                <Suspense fallback={<Loading />}>
                  <EventHome />
                </Suspense>
              }
            />
          )}

          {CTX.token && (
            <Route
              path="/user/account/deposit"
              element={
                <Suspense fallback={<Loading />}>
                  <EventDeposit />
                </Suspense>
              }
            />
          )}

          {CTX.token && (
            <Route
              path="/user/account/deposit/list"
              element={
                <Suspense fallback={<Loading />}>
                  <EventDeposit_list />
                </Suspense>
              }
            />
          )}

          {CTX.token && (
            <Route
              path="/user/account/withdrawal"
              element={
                <Suspense fallback={<Loading />}>
                  <EventWithdraw />
                </Suspense>
              }
            />
          )}

          {CTX.token && (
            <Route
              path="/user/account/running/deposit"
              element={
                <Suspense fallback={<Loading />}>
                  <EventWithdraw />
                </Suspense>
              }
            />
          )}

          {CTX.token && (
            <Route
              path="/user/account/profile"
              element={
                <Suspense fallback={<Loading />}>
                  <EventProfile />
                </Suspense>
              }
            />
          )}

          {CTX.token && (
            <Route
              path="/user/account/history"
              element={
                <Suspense fallback={<Loading />}>
                  <EventHistory />
                </Suspense>
              }
            />
          )}

          {CTX.token && (
            <Route
              path="/user/account/referral"
              element={
                <Suspense fallback={<Loading />}>
                  <EventReferals />
                </Suspense>
              }
            />
          )}

          {CTX.token && (
            <Route
              path="/user/account/security"
              element={
                <Suspense fallback={<Loading />}>
                  <EventSecurity />
                </Suspense>
              }
            />
          )}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
