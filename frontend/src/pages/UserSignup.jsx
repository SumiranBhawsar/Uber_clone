/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";

function UserSignup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userData, setuserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setuserData({
      firstName,
      lastName,
      email,
      password,
    });
    setemail("");
    setpassword("");
    setfirstName("");
    setlastName("");
  };

  return (
    <div className="h-screen w-full p-6 flex flex-col justify-between">
      <div className="">
        <img
          className="w-16 font-semibold mb-12"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-lg mb-2 font-semibold">What's your name</h3>
          <div className="flex gap-2 mb-5">
            <input
              required
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              className="text-xs w-1/2 rounded px-4 py-2 border border-zinc-400  bg-[#eeeeee] placeholder:text-sm"
              type="text"
              placeholder="First name"
            />
            <input
              required
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              className="text-xs rounded w-1/2 px-4 py-2 border border-zinc-400  bg-[#eeeeee] placeholder:text-sm"
              type="text"
              placeholder="Last name"
            />
          </div>
          <h3 className="text-lg mb-2 font-semibold">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="mb-5 text-xs rounded px-4 py-2 border border-zinc-400 w-full bg-[#eeeeee] placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg mb-2 font-semibold">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="mb-5 text-xs rounded px-4 py-2 border border-zinc-400 w-full bg-[#eeeeee] placeholder:text-sm"
            type="password"
            placeholder="Password"
          />

          <button className="w-full mt-4 text-sm mb-2 px-4 py-2 bg-black text-white font-semibold rounded">
            SignUp
          </button>
        </form>
        <p className="text-sm font-medium text-center">
          Already have a account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-xs text-justify text-zinc-600">
          By proceeding. you consent to get calls, WhatsApp or SMS message,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
}

export default UserSignup;
