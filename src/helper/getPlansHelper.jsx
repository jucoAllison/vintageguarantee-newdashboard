import {useState, useContext, useCallback} from 'react';
import axios from 'axios';
import Context from '../loginContext';
// import Loading from '../components/loading/loading';

export const GetPlansHelper = () => {
  const CTX = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [wallets, setWallets] = useState([]);
  const [plans, setPlans] = useState([]);

  const getPlans = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const request = await axios.get(`${CTX.url}admin/account/plans`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${sessionStorage.getItem('token')}`,
        },
      });

      await setLoading(false);

      await setWallets(request.data.data.wallets);
      await setPlans(request.data.plans.plans);

      console.log('request => ', request);

      return;
    } catch (error) {
      console.log(error);
    }
  };

  return {loading, getPlans, wallets, plans};
};
