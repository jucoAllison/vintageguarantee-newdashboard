import React from 'react'

export default React.createContext({
    token: null,
    setToken: (token) => {},
    setLoading:() => {},
    data: null,
    loading: null,
    setDate: () => {},
    decoded: null,
    hashed: null,
    url: null,
    // isTokenExpired: () => {},
    // isTokenValid: true,
    // setValidToken: () => {}, 
    // verifyToken: () => {},
})