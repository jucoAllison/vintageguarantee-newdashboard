import React from "react";
import Classes from "./home.module.css";
import { Link } from "react-router-dom";
import Eachheader from "../../component/eachheader/eachheader";
import EachBox from "../../component/eachBox/eachBox";
import { Helmet } from "react-helmet";
import Iframe from "react-iframe";
import Skeleton from "react-loading-skeleton";

const Home = ({ decoded, loading }) => {
  // const loading = false;
  // console.log("ctx", ctx.userAccountHistory[0])
  // console.log("ctx", ctx.userAccountHistory[0])

  return (
    <>
      <Helmet>
        <title>Overview - Vintage Guarantee </title>
        <meta name="og:title" content="Overview - Vintage Guarantee" />
        <meta name="og:description" content="Settings - Vintage Guarantee" />
        <meta
          name="og:name"
          content=" No.1 investment and trading platform, trusted by millions, top brands. we sell at the best prices ✓"
        />
        <meta
          name="og:name"
          content="No.1 investment and trading platform, trusted by millions, top brands. we sell at the best prices ✓"
        />
      </Helmet>

      <ul className={Classes.breadcrumb}>
        <li className={Classes.breadcrumb_item}>
          <Link to="/">Home</Link>
        </li>
        <li className={Classes.breadcrumb_item}>
          <Link to="/">User</Link>
        </li>
        <li className={Classes.breadcrumb_item}>
          <span>Dashboard</span>
        </li>
      </ul>
      <div className={Classes.pageCover}>
        <Iframe
          width="100%"
          allowtransparency="true"
          url="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22title%22%3A%22S%26P%20500%22%2C%22proName%22%3A%22OANDA%3ASPX500USD%22%7D%2C%7B%22title%22%3A%22Shanghai%20Composite%22%2C%22proName%22%3A%22INDEX%3AXLY0%22%7D%2C%7B%22title%22%3A%22EUR%2FUSD%22%2C%22proName%22%3A%22FX_IDC%3AEURUSD%22%7D%2C%7B%22title%22%3A%22BTC%2FUSD%22%2C%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%7D%2C%7B%22title%22%3A%22ETH%2FUSD%22%2C%22proName%22%3A%22BITSTAMP%3AETHUSD%22%7D%5D%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A44%2C%22utm_source%22%3A%22deluxinvestment.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%7D"
          height="43px"
          style={{ boxSizing: "border-box", height: "22px", width: "100%" }}
        ></Iframe>

        <Eachheader header_name="Account Overview" />
        <div className={Classes.AccountOverviewCover}>
          {loading ? (
            <>
              <Skeleton
                width={250}
                style={{ borderRadius: "10px" }}
                height={200}
              />
              <Skeleton
                width={250}
                style={{ borderRadius: "10px", marginRight: "30px" }}
                height={200}
              />
              <Skeleton
                width={250}
                style={{ borderRadius: "10px", marginRight: "30px" }}
                height={200}
              />
              <Skeleton
                width={250}
                style={{ borderRadius: "10px", marginRight: "30px" }}
                height={200}
              />
              <Skeleton
                width={250}
                style={{ borderRadius: "10px", marginRight: "30px" }}
                height={200}
              />
              <Skeleton
                width={250}
                style={{ borderRadius: "10px", marginRight: "30px" }}
                height={200}
              />
            </>
          ) : (
            <>
              {/* <EachBox value={decoded?.active_deposit} label="active deposit" />
              <EachBox
                value={decoded?.active_deposit}
                label="current deposit"
              /> */}
              <EachBox
                value={`$${decoded?.pending_withdrawal ? decoded?.pending_withdrawal : 0}`}
                label="pending withdrawal"
              />
              <EachBox
                value={`$${
                  decoded.pending_deposit ? decoded.pending_deposit : 0
                }`}
                label="pending deposit"
              />
              <EachBox
                value={`$${decoded.total_bonus ? decoded?.total_bonus : "0"}`}
                label="total bonus"
              />
              <EachBox
                value={`$${decoded.balance ? decoded?.balance : 0}`}
                label="account balance"
              />
              <EachBox
                value={`$${
                  decoded.total_withdrawal ? decoded?.total_withdrawal : 0
                }`}
                label="total withdrawal"
              />
              <EachBox
                value={`$${decoded.total_deposit ? decoded?.total_deposit : 0}`}
                label="total deposits"
              />
            </>
          )}
        </div>
        {/* <Eachheader header_name="Trading Overview" />

        <Iframe
          width="100%"
          id="tradingview_b09f3"
          url="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_b09f3&amp;symbol=BITFINEX%3ABTCUSD&amp;interval=1&amp;range=all&amp;symboledit=1&amp;saveimage=0&amp;toolbarbg=f1f3f6&amp;details=1&amp;calendar=1&amp;hotlist=1&amp;studies=BB%40tv-basicstudies%1FMACD%40tv-basicstudies%1FMF%40tv-basicstudies&amp;theme=Dark&amp;style=1&amp;timezone=Etc%2FUTC&amp;withdateranges=1&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=deluxinvestment.com&amp;utm_medium=widget&amp;utm_campaign=chart&amp;utm_term=BITFINEX%3ABTCUSD"
          height="500px"
        ></Iframe> */}
      </div>
    </>
  );
};

export default Home;
