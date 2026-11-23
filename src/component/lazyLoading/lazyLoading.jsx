import React, { useContext } from 'react';
import Classes from './lazyLoading.module.css';
import SemiLogo from '../../asset/logo_semi.png';
import RightLogo from '../../asset/star.png'
import Sidebar from '../../component/layout/sidebar/sidebar';
import {MainContext} from '../../App';
import Loading from '../loading/loading';


const LazyLoading = () => {
    const CTX = useContext(MainContext)
  return (
    <div className={Classes.flexSection}>
    <Sidebar />
    <div
      onClick={CTX.removeSideBar}
      style={{
        padding: '0px 20px',
        boxSizing: 'border-box',
        width: '100%',
        filter: 'blur(var(--body-blur,0px))',
      }}
    >
    <div className={Classes.LoginFormCover}>
      <div className={Classes.relative}>
        <img src={SemiLogo} className={Classes.topRightLogo} />
        <img src={RightLogo} className={Classes.rightLogo} />
        <img src={RightLogo} className={Classes.leftLogo} />
        <img src={RightLogo} className={Classes.topLeftLogo} />
        <img src={SemiLogo} className={Classes.semiLogo} />
      <Loading className={Classes.Loading} style={{fill:  "#fff", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} size='60px' />
      </div>
    </div>
    </div>
    </div>
  );
};

export default LazyLoading;
