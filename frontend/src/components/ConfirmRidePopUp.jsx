/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ConfirmRidePopUp({ setridePopUp, setConfirmRidePopUp }) {
  const [otp, setotp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make API call to confirm ride
    //...
  };
  return (
    <div>
      <div className="p-1 flex items-center justify-center mb-1">
        <div
          onClick={() => {
            setridePopUp(false);
            setConfirmRidePopUp(false);
          }}
          className="w-8 h-1 bg-gray-200 rounded-full"
        ></div>
      </div>
      <div className="w-full flex items-center justify-between py-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-4 items-center">
            <img
              className="h-16 w-16 object-cover rounded-full "
              src="https://imgs.search.brave.com/pT8MfOgQqK8pd47DbSeJWR4gL4UngfzugpxP3dOw1eQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzc4LzA5Lzc4/LzM2MF9GXzY3ODA5/Nzg3MV9HN09wb0hR/bWlaVGo0YkhCN1lX/MkhvSDFzeVdmQ2JC/OS5qcGc"
              alt=""
            />
            <div>
              <h4 className="text-lg font-semibold">Sumiran Bhawsar</h4>
              <p className="text-sm text-gray-500">Basic</p>
            </div>
          </div>
          <div className="flex flex-col items-end  justify-center px-2">
            <h4 className="font-medium text-lg -mb-1">₹193.20</h4>
            <p className="text-sm text-gray-500">2.2 km</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center gap-4 w-full border-t-2 border-gray-300 py-4 px-2">
          <span className="text-xl rounded-full">
            <FaLocationDot />
          </span>
          <div>
            <h4 className="text-xs text-gray-600">PICK UP</h4>
            <h3 className="font-semibold">562/11 - A</h3>
            <h4 className="text-sm ">mastani lassy, Khandwa, Madhya pradesh</h4>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full border-t-2 border-b-2 border-gray-300 py-2 px-2">
          <span className="text-xl rounded-full">
            <FaLocationDot />
          </span>
          <div>
            <h4 className="text-xs text-gray-600">DROP OFF</h4>
            <h3 className="font-semibold">562/11 - A</h3>
            <h4 className="text-sm ">mastani lassy, Khandwa, Madhya pradesh</h4>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-full py-10 flex items-center justify-end gap-4 flex-col"
        >
          <input
            value={otp}
            onChange={(e) => setotp(e.target.value)}
            className="bg-[#eee] px-6 font-mono py-2 w-full rounded-sm mb-2"
            type="number"
            placeholder="Enter OTP"
          />
          <button
            onClick={() => {
              setridePopUp(false);
              setConfirmRidePopUp(false);
            }}
            className="w-full px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded "
          >
            Cancle
          </button>
          <Link
            to={"/captain-riding"}
            className="w-full text-center px-6 py-2 bg-yellow-300 text-gray-700 font-medium rounded "
          >
            Confirm
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ConfirmRidePopUp;
