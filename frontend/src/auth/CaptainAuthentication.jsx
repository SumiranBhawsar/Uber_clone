/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { captainDataContext } from "../context/CaptainContext";
import axios from "axios";

function CaptainAuthentication({ children }) {
  const { captain, setcaptain } = React.useContext(captainDataContext);
  const accessToken = localStorage.getItem("captainToken");
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(true);

  const validateCaptain = async () => {
    await axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/captains/profile`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          setcaptain(data.captain);
          setisLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error during captain validation:", err.message);
        localStorage.removeItem("captainToken");
        navigate("/captain-login");
      });

    if (isLoading) {
      return <div>Loading...</div>;
    }
  };

  useEffect(() => {
    if (!accessToken) {
      navigate("/captain-login");
    }

    validateCaptain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, setcaptain]);

  return <>{children}</>;
}

export default CaptainAuthentication;
