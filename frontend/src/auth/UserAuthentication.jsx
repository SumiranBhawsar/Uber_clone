/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserAuthentication({ children }) {
  const accessToken = localStorage.getItem("token");
  const { user, setuser } = useContext(UserDataContext);
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(true);

  const validateUser = async () => {
    await axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/users/profile`,
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
          setuser(data.user);
          setisLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error during user validation:", err.message);
        localStorage.removeItem("token");
        navigate("/login");
      });
  };

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
    validateUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, setuser]);

  return <>{children}</>;
}

export default UserAuthentication;
