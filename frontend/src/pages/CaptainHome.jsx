// import React from 'react'
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import { IoLogOutOutline } from "react-icons/io5";
import RidePopUp from "../components/RidePopUp";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
function CaptainHome() {
  const [ridePopUp, setridePopUp] = useState(true);
  const ridePopUpRef = useRef(null);
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false);
  const confirmRidePopUpRef = useRef(null);

  useGSAP(() => {
    if (ridePopUp) {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopUpRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopUp]);

  useGSAP(() => {
    if (confirmRidePopUp) {
      gsap.to(confirmRidePopUpRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePopUpRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopUp]);

  return (
    <div className="w-full h-screen">
      <div className="fixed flex items-center justify-between w-full p-4">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          className="text-2xl bg-white p-2 rounded-full"
          to={"/captain-login"}
        >
          <IoLogOutOutline />
        </Link>
      </div>
      <div className="h-screen w-full">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>
      <div className="fixed z-10 bottom-0 bg-white rounded-t-xl w-full px-2 pb-6 ">
        <CaptainDetails setridePopUp={setridePopUp} />
      </div>

      <div
        ref={ridePopUpRef}
        className="fixed z-10 bottom-0 bg-white w-full px-4 pb-2 translate-y-full"
      >
        <RidePopUp setConfirmRidePopUp={setConfirmRidePopUp} setridePopUp={setridePopUp} />
      </div>

      <div
        ref={confirmRidePopUpRef}
        className="fixed z-10 bottom-0 h-screen bg-white w-full px-4 pb-2 translate-y-full"
      >
        <ConfirmRidePopUp setridePopUp={setridePopUp} setConfirmRidePopUp={setConfirmRidePopUp} />
      </div>
    </div>
  );
}

export default CaptainHome;
