import React, {useContext, useEffect, useState} from 'react';
import History from './history';
import Context from '../../loginContext';

const EventHistory = () => {
  const ctx = useContext(Context);
  const [loadingWallet, setLoadingWallet] = useState(false);
  const [wallets, setWallets] = useState([]);
  const [plans, setPlans] = useState([]);

  const getPlans = async () => {
    try {
      setLoadingWallet(true);
      const fecthThis = await fetch(`${ctx.url}admin/account/plans`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
      const awaiting = await fecthThis.json();
      setWallets(awaiting.data.wallets);
      setPlans(awaiting.plans.plans);
      setLoadingWallet(false);
    } catch (error) {
      console.log('error => ', error);
    }
  };


  useEffect(() => {
    getPlans();
  }, []);
  return (
    <History loadingWallet={loadingWallet} wallets={wallets} plans={plans} />
  );
};

export default EventHistory;
