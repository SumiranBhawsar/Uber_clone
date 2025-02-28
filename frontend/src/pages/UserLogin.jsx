/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { Link } from "react-router-dom";

function UserLogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userData, setuserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setuserData({
      email: email,
      password: password,
    });

    console.log(userData);

    setemail("");
    setpassword("");
  };

  return (
    <div className="h-screen p-6 flex flex-col justify-between">
      <div>
        <img
          className="w-16 font-semibold mb-12"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3 className="text-lg mb-2 font-semibold">What's your email</h3>
          <input
            value={email}
            required
            onChange={(e) => setemail(e.target.value)}
            className="mb-6 text-sm rounded px-4 py-2 border border-zinc-400 w-full bg-[#eeeeee] placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg mb-2 font-semibold">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="mb-6 text-sm rounded px-4 py-2 border border-zinc-400 w-full bg-[#eeeeee] placeholder:text-sm"
            type="password"
            placeholder="Password"
          />

          <button className="w-full mt-4 text-sm mb-2 px-4 py-2 bg-black text-white font-semibold rounded">
            Login
          </button>
        </form>
        <p className="text-sm font-medium text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600 font-medium">
            Create new account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="w-full flex items-center justify-center mt-4 px-4 py-2 text-sm bg-[#D14957] text-white font-semibold rounded"
        >
          Login as a captain
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
 