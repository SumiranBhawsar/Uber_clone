import { BsCashCoin } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";

function Riding() {
  return (
    <div className="w-full h-screen">
      <Link className="absolute text-2xl bg-white p-2 rounded-full right-4 top-4" to={"/home"}>
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
        <div className="w-full flex items-center justify-center">
          <div className="h-20 w-44 rounded-full bg-sky-50 flex items-center justify-center mt-8">
            <div className="h-10 w-36 bg-sky-100 rounded-full">
              <img
                className="absolute top-2 left-24 h-24"
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
                alt=""
              />
            </div>
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
