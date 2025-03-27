/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowDownWideFill } from "react-icons/ri";
function WaitingForDriver({ setwaitingForDriver }) {
  return (
    <div>
      <div
        onClick={() => {
          setwaitingForDriver(false);
        }}
        className="flex items-center justify-center bg-gray-100 mb-2 rounded-full"
      >
        <span className="text-2xl ">
          <RiArrowDownWideFill />
        </span>
      </div>
      <div className="border-b-2 border-gray-300 pb-3 flex items-center justify-between">
        <h4 className="text-xl font-semibold border-gray-300">
          Meet at the pickup point
        </h4>
        <div className="flex flex-col items-center bg-black text-white px-2 py-1 rounded">
          <h4 className="text-sm font-semibold">2</h4>
          <p className="text-sm font-semibold">mins</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between py-6">
        <div className="flex relative">
          <img
            className="h-18 w-18 absolute mt-1 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="h-18 ml-4 bg-sky-50 rounded-full mt-1"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt=""
          />
        </div>
        <div className="text-right">
          <h4 className="font-medium">Sumiran Bhawsar</h4>
          <h2 className="font-bold text-lg">MP12 XY6264</h2>
          <p className="text-sm font-medium text-gray-600">
            White Suzuki S-Perso LXI
          </p>
        </div>
      </div>
      <div className="w-full">
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
      </div>
    </div>
  );
}

export default WaitingForDriver;
