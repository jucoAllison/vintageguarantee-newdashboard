import React from 'react';
import Classes from './layout.module.css';
import Body from './body/body';
import Sidebar from './sidebar/sidebar';
import MobileSidebar from './sidebar/mobileSidebar';

const Layout = () => {
  return (
    <div className={Classes.layoutCover}>
      <div className={Classes.navBodyCover}>
        <div className={Classes.sideCover}>
          <div className={Classes.desktopCover}>
            <Sidebar />
          </div>
          <div className={Classes.mobileCover}>
            <MobileSidebar />
          </div>
        </div>

        <div className={Classes.bodyCover}>
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Layout;
