import React, { useEffect } from "react";
import { captainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CaptainLogout() {
  const { setcaptain } = React.useContext(captainDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const logoutCaptain = async () => {
      try {
        const captainToken = localStorage.getItem("captainToken");

        if (captainToken) {
          // Make a request to the backend to invalidate the token
          await axios.post(
            `${import.meta.env.VITE_BASE_URL}/captains/logout`,
            {},
            {
              headers: {
                Authorization: `Bearer ${captainToken}`,
              },
            }
          );

          // Remove token from localStorage
          localStorage.removeItem("captainToken");

          // Clear user context
          setcaptain(null);

          // Redirect to login page
          navigate("/captain-login");
        }
      } catch (error) {
        console.error("Error during logout:", error.message);
      }
    };
    logoutCaptain();
  }, [navigate, setcaptain]);

  return <div>Captain Logging out...</div>;
}

export default CaptainLogout;
