import { BsCashCoin } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";

function Riding() {
  return (
    <div className="w-full h-screen">
      <Link
        className="absolute text-2xl bg-white p-2 rounded-full right-4 top-4"
        to={"/home"}
      >
        <RiHome2Line />
      </Link>
      <div className="h-screen w-full">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>
      <div className="fixed z-10 bottom-0 bg-white w-full px-4 py-2">
        <div className="w-full flex items-center justify-between py-2">
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
        <div className="w-full mt-4">
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
          <button className="w-full mt-3 rounded-lg bg-blue-500 text-white font-medium py-2 ">
            Make a Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Riding;
