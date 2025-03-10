/* eslint-disable react/prop-types */
// import React from 'react'

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CaptainAuthentication({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("captainToken");

    if (!accessToken) {
      navigate("/captain-login");
    }
  }, [navigate]);

  return <>{children}</>;
}

export default CaptainAuthentication;
