import { Link } from "react-router-dom";

function Start() {
  return (
    <div>
      <div className="bg-cover bg-center bg-no-repeat bg-[url(../../public/backgound.jpg)] h-screen w-full pt-8 flex justify-between flex-col bg-red-300">
        <img
          className="w-24 ml-8 font-semibold"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt=""
        />
        <div className="bg-white py-6 px-5">
          <h2 className="text-2xl font-semibold">Get started with Uber..</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-2 rounded mt-6 font-semibold"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
