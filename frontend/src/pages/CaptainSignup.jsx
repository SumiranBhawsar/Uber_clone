/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { captainDataContext } from "../context/CaptainContext";

function CaptainSignup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [fullName, setfullName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");

  const { captain, setcaptain } = React.useContext(captainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: fullName,
      email: email,
      password: password,
      color: vehicleColor,
      licensePlate: vehiclePlate,
      capacity: vehicleCapacity,
      vehicleType: vehicleType,
      model: vehicleModel,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData
      );

      if (response.status === 201) {
        const data = response.data;
        setcaptain(data.captain);
        navigate("/captain-login");
      }
    } catch (error) {
      console.error("Error during captain registration:", error);
      // Handle error appropriately (e.g., show error message to user)
    }

    setemail("");
    setpassword("");
    setfullName("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
    setVehicleModel("");
  };

  return (
    <div className="h-screen w-full p-6 flex flex-col justify-between">
      <div className="">
        <img
          className="w-16 font-semibold mb-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-lg mb-2 font-semibold">What's your name</h3>
          <div className="flex gap-2 mb-5">
            <input
              required
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
              className="text-sm w-full rounded px-4 py-2 border border-zinc-400 font-medium  bg-[#eeeeee] placeholder:text-sm"
              type="text"
              placeholder="Full name"
            />
          </div>
          <h3 className="text-lg mb-2 font-semibold">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="mb-5 text-sm rounded px-4 py-2 border border-zinc-400 font-medium w-full bg-[#eeeeee] placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg mb-2 font-semibold">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="mb-5 text-sm rounded px-4 py-2 border border-zinc-400 font-medium w-full bg-[#eeeeee] placeholder:text-sm"
            type="password"
            placeholder="Password"
          />

          <h3 className="text-lg mb-3 font-semibold">Vehicle Information</h3>
          <div className="flex flex-col gap-4 mb-5">
            <div className="flex gap-2">
              <input
                required
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className="text-sm w-1/2 rounded px-4 py-2 border border-zinc-400 font-medium  bg-[#eeeeee] placeholder:text-sm"
                type="text"
                placeholder="Vehicle Color"
              />
              <input
                required
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className="text-sm rounded w-1/2 px-4 py-2 border border-zinc-400 font-medium  bg-[#eeeeee] placeholder:text-sm"
                type="text"
                placeholder="Vehicle Plate"
              />
            </div>
            <div className="flex gap-2">
              <input
                required
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className="text-sm w-1/2 rounded px-4 py-2 border border-zinc-400 font-medium bg-[#eeeeee] placeholder:text-sm"
                type="text"
                placeholder="Vehicle Capacity"
              />
              <select
                required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="text-sm w-1/2 rounded px-4 py-2 border border-zinc-400 font-medium bg-[#eeeeee] placeholder:text-sm"
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="bike">Moto</option>
              </select>
            </div>
            <input
              required
              value={vehicleModel}
              onChange={(e) => setVehicleModel(e.target.value)}
              className="text-sm w-full rounded px-4 py-2 border border-zinc-400 font-medium bg-[#eeeeee] placeholder:text-sm"
              type="text"
              placeholder="Vehicle Model"
            />
          </div>

          <button className="w-full mt-4 text-sm mb-2 px-4 py-2 bg-black text-white font-semibold rounded">
            Captain-SignUp
          </button>
        </form>
        <p className="text-sm font-medium text-center">
          Already have a account?{" "}
          <Link to="/captain-login" className="text-blue-600 font-medium">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-sm text-justify text-zinc-600">
          By proceeding. you consent to get calls, WhatsApp or SMS message,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
}

export default CaptainSignup;