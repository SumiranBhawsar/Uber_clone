/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CgNotes } from "react-icons/cg";
import { IoTimeOutline } from "react-icons/io5";
import { RiSpeedUpLine } from "react-icons/ri";

function CaptainDetails({ setridePopUp }) {
  return (
    <div>
      <div className="p-1 flex items-center justify-center mb-1">
        <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
      </div>
      <div className="w-full flex items-center justify-between py-2">
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
          <div className="flex flex-col items-start justify-center px-2">
            <h4 className="font-medium text-lg">₹193.20</h4>
            <p className="text-sm text-gray-500">Earned</p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-evenly bg-amber-400 py-6 rounded-lg mt-2">
        <div className="flex flex-col items-center justify-center gap-1">
          <IoTimeOutline className="text-2xl" />
          <h4 className="text-lg">10.2</h4>
          <p className="text-xs text-gray-700 uppercase tracking-tight">
            Hours Online
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <RiSpeedUpLine className="text-2xl" />
          <h4 className="text-lg">30 KM</h4>
          <p className="text-xs text-gray-700 uppercase tracking-tight">
            Total Distance
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <CgNotes className="text-2xl" />
          <h4 className="text-lg">20</h4>
          <p className="text-xs text-gray-700 uppercase tracking-tight">
            Total Jobs
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaptainDetails;
