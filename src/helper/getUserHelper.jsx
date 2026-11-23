// // import {useState, useContext, useEffect} from 'react';
// import Context from '../loginContext';
// // import axios from 'axios';
// // // import Loading from '../components/loading/loading';

// // export const GetUserDetails = () => {

// //   const [loading, setLoading] = useState(false);
// //   const [data, setData] = useState(null);

// //   const getUser = async () => {
// //     alert("fetching HERE")
// //     if (CTX?.data?.length > 13) {
// //       return null;
// //     }

// //     if (loading) {
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const request = await axios.get(`${CTX.url}user/action/view-info`, {
// //         headers: {
// //           'Content-Type': 'application/json',
// //           Authorization: `Token ${sessionStorage.getItem('token')}`,
// //         },
// //       });

// //       setLoading(false);

// //       CTX.setDate(request.data?.data);
// //       await setData(request.data?.data);
// //        console.log("request.data?.data => ", request.data?.data)

// //       return;
// //     } catch (error) {
// //       // setMsg('Invalid login details');
// //       console.log("error from GetUserDetails => ", );
// //     }
// //   };

// //   useEffect(() => {
// //     getUser()
// //   },[])

// //   console.log("MAIN GetUserDetails data => ", data)

// //   return {loading, getUser, data: data};
// // };

// //useFetch.js
// import {useState, useEffect, useContext} from 'react';
// import axios from 'axios';

// export const GetUserDetails = () => {
//   const CTX = useContext(Context);
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     setData(null);
//     setError(null);
//     const source = axios.CancelToken.source();
//     axios
//       .get(`${CTX.url}user/action/view-info`, {
//         cancelToken: source.token,
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Token ${sessionStorage.getItem('token')}`,
//         },
//       })
//       .then((res) => {
//         setLoading(false);

//       res.data?.data && CTX.setDate(res.data?.data);
//       res.data?.data && setData(res.data?.data);

//         //checking for multiple responses for more flexibility
//         //with the url we send in.
//         // res.data.content && setData(res.data.content);
//         // res.content && setData(res.content);
//       })
//       .catch((err) => {
//         setLoading(false);
//         setError(true);
//       console.log("error from GetUserDetails => ", err);
//       });
//     return () => {
//       source.cancel();
//     };
//   }, [ ]);

//   return {data, loading, error};
// };
