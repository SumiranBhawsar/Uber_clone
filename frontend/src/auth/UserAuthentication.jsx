/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function UserAuthentication({ children }) {
  const { user, setuser } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('token');

    if (!accessToken) {
      navigate("/login");
    }
  }, [navigate]);

  return <>{children}</>;
}

export default UserAuthentication;