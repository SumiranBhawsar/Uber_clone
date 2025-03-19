import { RiArrowDownWideFill } from "react-icons/ri";
import LocationSearchPanel from "../components/locationSearchPanel";
import { useRef, useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";

function Home() {
  const [pickUp, setpickUp] = useState("");
  const [destination, setdestination] = useState("");
  const [panelOpen, setpanelOpen] = useState(false);
  const panelRef = useRef(null);
  const closePanelRef = useRef(null);

  useEffect(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity: "1",
        padding: "20px",
      });
      gsap.to(closePanelRef.current, {
        opacity: "1",
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        opacity: "0",
        padding: "0",
      });
      gsap.to(closePanelRef.current, {
        opacity: "0",
      });
    }
  }, [panelOpen]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-20 absolute top-8 left-8"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      <div className="h-screen w-full">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>
      <div className="h-screen absolute bottom-0 flex flex-col justify-end w-full">
        <div className="h-[30%] px-5 py-5 bg-white relative">
          <span
            ref={closePanelRef}
            onClick={() => {
              setpanelOpen(false);
            }}
            className="text-2xl cursor-pointer absolute right-4 top-5"
          >
            <RiArrowDownWideFill />
          </span>
          <h4 className="text-xl font-bold mb-5">Find a trip</h4>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <div className="line h-15 w-1 bg-black absolute rounded-full top-5 left-5"></div>
            <input
              onClick={() => {
                setpanelOpen(true);
              }}
              value={pickUp}
              onChange={(e) => setpickUp(e.target.value)}
              className="bg-[#eee] px-14 font-semibold py-2 w-full rounded-sm mb-4"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setpanelOpen(true);
              }}
              value={destination}
              onChange={(e) => setdestination(e.target.value)}
              className="bg-[#eee] px-14 font-semibold py-2 w-full rounded-sm"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0%] bg-white">
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  );
}

export default Home;
