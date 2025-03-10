// import React from 'react'

import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
// import Profile from "./pages/Profile";
import UserAuthentication from "./auth/UserAuthentication";
import Home from "./pages/Home";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainLogout from "./pages/CaptainLogout";
import CaptainAuthentication from "./auth/CaptainAuthentication";

// import { useContext } from "react";
// import { UserDataContext } from "./context/UserContext";

function App() {
  // const user = useContext(UserDataContext);

  // console.log(user);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserAuthentication>
              <Home />
            </UserAuthentication>
          }
        />
        <Route path="/user/logout" element={<UserLogout />} />
        <Route
          path="/captain-home"
          element={
            <CaptainAuthentication>
              <CaptainHome />
            </CaptainAuthentication>
          }
        />
        <Route path="/captain/logout" element={<CaptainLogout />} />
      </Routes>
    </div>
  );
}

export default App;
