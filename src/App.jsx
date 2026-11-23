import React, { useEffect, useState } from "react";
import Layout from "./component/layout/layout";
import Context from "./loginContext";
import { jwtDecode } from "jwt-decode";

if (window.location.search.split("=")[0] === "?token") {
  sessionStorage.setItem("token", window.location.search.split("=")[1]);
} else if (!sessionStorage.getItem("token")) {
  window.location.replace("https://vintageguarantee.com");
}

function App() {
// jucoallison
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUwZDlmYjU3NDljMTAwYTIwMmRlOTgiLCJyZWdfZGF0ZSI6Ik5vdiAxMiwgMjAyMyA3OjU2IEFNIiwiYmFsYW5jZSI6NDk4NiwicnVubmluZyI6W10sInJ1bm5pbmdfZGVwb3NpdCI6MCwicnVubmluZ19iYWxhbmNlIjowLCJ0b3RhbF9kZXBvc2l0Ijo0NTAwLCJhY3RpdmVfZGVwb3NpdCI6MSwidG90YWxfZWFybmluZyI6MCwidG90YWxfd2l0aGRyYXdhbCI6NiwidG90YWxfYm9udXMiOjAsInRvdGFsX3BlbmFsdHkiOjAsInBlbmRpbmdfd2l0aGRyYXdhbCI6NiwicGVuZGluZ19kZXBvc2l0IjowLCJyZWZlcnJhbF9jb21taXNzaW9uIjo1NC45NSwiYWN0aXZlIjp0cnVlLCJzdXNwZW5kZWQiOmZhbHNlLCJkaXNhYmxlZCI6ZmFsc2UsInVzZXJuYW1lIjoianVjb2FsbGlzb24iLCJlbWFpbCI6Imp1Y29hbGxpc29uQGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6Imp1Y28gYWxsaXNvbiIsInBhc3N3b3JkIjpudWxsLCJ1cGxpbmUiOiJzeXN0ZW0gc2l0ZSIsInJlZmVycmFsIjo2LCJ3aXRoZHJhd2FsX2RldGFpbHMiOlt7InR5cGUiOiJiaXRjb2luIiwidmFsdWUiOiJ5aGd0ZGR0cnl5dXR0cnU1cnVycnU1NHVpNmlieWk2dDYiLCJhZGRyZXNzIjoiIn0seyJ0eXBlIjoiZXRoZXJldW0iLCJ2YWx1ZSI6IiIsImFkZHJlc3MiOiIifSx7InR5cGUiOiJ1c2R0IiwidmFsdWUiOiJpdWJ5dHRpODdpNzVpNjg1aTY1aTZpNnR1eXJ1cjYiLCJhZGRyZXNzIjoiIn1dLCJjcmVhdGVkQXQiOiIyMDIzLTExLTEyVDEzOjU4OjE5LjYwMloiLCJ1cGRhdGVkQXQiOiIyMDI1LTAzLTAzVDA4OjUzOjM5Ljk1N1oiLCJfX3YiOjAsImlhdCI6MTc2NTk2MzE0Nn0.bNzrLuz0RSWe75kJH-cEIMlQfw4AlPLduDwu8BZSg5k


  const [decoded, setDecoded] = useState({});
  const [data, setData] = useState([]);
  // const url = "http://localhost:5005/";
  // const url = "https://backend.vintageguarantee.com/";
  const url = "https://server-vintageguarantee.onrender.com/"
  // const url = "http://localhost:5005/";

  const setDateHandler = (payload) => {
    setData(payload);
    var decoded = jwtDecode(payload);

    return setDecoded(decoded);
  };

  return (
    <Context.Provider
      value={{
        url: url,
        data: data,
        setDate: setDateHandler,
        decoded,
      }}
    >
      <div id="google_translate_element"></div>
      <Layout />
    </Context.Provider>
  );
}

export default App;

// vintageguarantee.com
// Vintage Guarantee

// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/
// https://cryptocashletter.com/


// 353858
// 0073ff
// 047bf8



// real estate plan 10000 to 200000 10%

// savings plan 5000 to 100000  15%