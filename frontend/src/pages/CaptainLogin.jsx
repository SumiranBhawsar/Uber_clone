/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { captainDataContext } from "../context/CaptainContext";

function CaptainLogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const { captain, setcaptain } = React.useContext(captainDataContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = { 
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        captainData
      );

      if (response.status === 200) {
        const data = response.data;
        // console.log(data);
        setcaptain(data.captain);

        // console.log(data);

        localStorage.setItem("captainToken", data.message.accessToken);

        navigate("/captain-home");
      }

      setemail("");
      setpassword("");

    } catch (error) {
      console.error("Error during captain login:", error.message);
    }

    setemail("");
    setpassword("");
  };
  return (
    <div className="h-screen p-6 flex flex-col justify-between">
      <div>
        <img
          className="w-16 font-semibold mb-12"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3 className="text-lg mb-2 font-semibold">What's your email</h3>
          <input
            value={email}
            required
            onChange={(e) => setemail(e.target.value)}
            className="mb-6 text-sm rounded px-4 py-2 border border-zinc-400 w-full bg-[#eeeeee] placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg mb-2 font-semibold">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="mb-6 text-sm rounded px-4 py-2 border border-zinc-400 w-full bg-[#eeeeee] placeholder:text-sm"
            type="password"
            placeholder="Password"
          />

          <button className="w-full mt-4 text-sm mb-2 px-4 py-2 bg-black text-white font-semibold rounded">
            Login
          </button>
        </form>
        <p className="text-sm font-medium text-center">
          Join a fleet ?{" "}
          <Link to="/captain-signup" className="text-blue-600 font-medium">
            Register as a captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="w-full flex items-center justify-center mt-4 px-4 py-2 text-sm bg-[#D14957] text-white font-semibold rounded"
        >
          login as a user
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
