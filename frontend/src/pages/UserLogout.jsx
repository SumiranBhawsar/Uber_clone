import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

function UserLogout() {
  const { setuser } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          // Make a request to the backend to invalidate the token
          await axios.post(
            `${import.meta.env.VITE_BASE_URL}/users/logout`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // Remove token from localStorage
          localStorage.removeItem("token");

          // Clear user context
          setuser(null);

          // Redirect to login page
          navigate("/login");
        }
      } catch (error) {
        console.error("Error during logout:", error.message);
        // Handle error appropriately (e.g., show error message to user)
      }
    };

    logoutUser();
  }, [navigate, setuser]);

  return <div>Logging out...</div>;
}

export default UserLogout;