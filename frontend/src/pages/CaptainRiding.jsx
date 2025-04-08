import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

function CaptainRiding() {
  const [finishRidePanel, setfinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="h-screen w-full">
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
      <div
        onClick={() => {
          setfinishRidePanel(true);
        }}
        className="fixed z-10 bottom-0 w-full px-4 pb-2 bg-amber-300"
      >
        <div className="p-1 flex items-center justify-center mb-1">
          <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
        </div>
        <h4 className="text-xl font-semibold my-2 text-center">4KM Away</h4>
        <button className="w-full  font-semibold text-white py-2 bg-green-600 my-2 rounded">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed z-10 bottom-0 h-screen bg-white w-full px-4 pb-2 translate-y-full"
      >
        <FinishRide setfinishRidePanel={setfinishRidePanel} />
      </div>
    </div>
  );
}

export default CaptainRiding;
