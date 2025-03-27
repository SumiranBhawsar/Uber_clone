/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { RiArrowDownWideFill } from "react-icons/ri";
function LookingForDriver({ setvehicleFound, setvehiclePanelOpen }) {
  return (
    <div>
      <span
        onClick={() => {
          setvehicleFound(false);
          setvehiclePanelOpen(false)
        }}
        className="absolute top-3 right-6 text-2xl "
      >
        <RiArrowDownWideFill />
      </span>
      <h4 className="text-xl font-semibold mb-12">Looking for Driver</h4>
      <div className="w-full flex items-center justify-center">
        <div className="h-24 w-64 rounded-full bg-sky-50 flex items-center justify-center">
          <div className="h-14 w-52 bg-sky-100 rounded-full">
            <img
              className="absolute top-12 left-16 h-32"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-6">
        <div className="flex items-center gap-4 w-full border-t-2 border-gray-300 py-4 px-2">
          <span className="text-2xl rounded-full">
            <FaLocationDot />
          </span>
          <div>
            <h3 className="text-lg font-bold">562/11 - A</h3>
            <h4 className="text-base ">
              mastani lassy, Khandwa, Madhya pradesh
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full border-t-2 border-gray-300 py-2 px-2">
          <span className="text-2xl rounded-full">
            <FaLocationDot />
          </span>
          <div>
            <h3 className="text-lg font-bold">562/11 - A</h3>
            <h4 className="text-base ">
              mastani lassy, Khandwa, Madhya pradesh
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full border-y-2 border-gray-300 py-4 px-2">
          <span className="text-2xl rounded-full">
            <BsCashCoin />
          </span>
          <div>
            <h3 className="text-lg font-bold">₹193.20</h3>
            <h4 className="text-base ">Cash Cash</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookingForDriver;
