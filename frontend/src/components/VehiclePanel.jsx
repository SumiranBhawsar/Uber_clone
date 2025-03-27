/* eslint-disable react/prop-types */
// import React from "react";
import { FaUser } from "react-icons/fa6";
import { RiArrowDownWideFill } from "react-icons/ri";

function VehiclePanel({ setvehiclePanelOpen, setconfirmRidePanel }) {
  return (
    <div className="flex flex-col gap-3">
      <span
        onClick={() => {
          setvehiclePanelOpen(false);
        }}
        className="absolute top-7 right-4 text-2xl "
      >
        <RiArrowDownWideFill />
      </span>
      <h4 className="text-xl font-semibold ml-2 mb-2">Choose a vehicle</h4>
      <div
        onClick={() => {
          setconfirmRidePanel(true);
        }}
        className="flex items-center justify-between w-full px-2 py-3 border-2 border-gray-700 bg-gray-100 rounded-xl"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />
        <div className="mr-1 w-1/2">
          <h4 className="flex gap-4 font-medium">
            UberGo{" "}
            <span className="flex items-center gap-1">
              <FaUser />4
            </span>
          </h4>
          <h5 className="text-xs font-medium">2 mins away</h5>
          <p className="text-xs font-normal text-gray-800">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          setconfirmRidePanel(true);
        }}
        className="flex items-center justify-between w-full px-2 py-3 border-2 border-gray-700 bg-gray-100 rounded-xl"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="mr-1 w-1/2 ml-4">
          <h4 className="flex gap-4 font-medium">
            Moto{" "}
            <span className="flex items-center gap-1">
              <FaUser />1
            </span>
          </h4>
          <h5 className="text-xs font-medium">3 mins away</h5>
          <p className="text-xs font-normal text-gray-800">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹65.17</h2>
      </div>
      <div
        onClick={() => {
          setconfirmRidePanel(true);
        }}
        className="flex items-center justify-between w-full px-2 py-3 border-2 border-gray-700 bg-gray-100 rounded-xl"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="mr-1 w-1/2 ml-4">
          <h4 className="flex gap-4 font-medium">
            UberAuto{" "}
            <span className="flex items-center gap-1">
              <FaUser />3
            </span>
          </h4>
          <h5 className="text-xs font-medium">2 mins away</h5>
          <p className="text-xs font-normal text-gray-800">
            Affordable, Auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹118.21</h2>
      </div>
    </div>
  );
}

export default VehiclePanel;
