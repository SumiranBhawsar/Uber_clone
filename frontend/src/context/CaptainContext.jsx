/* eslint-disable react-refresh/only-export-components */
// /* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const captainDataContext = createContext();

function CaptainContext({ children }) {
  const [captain, setcaptain] = useState({
    email: "",
    fullName: "",
    password: "",
    vehicleColor: "",
    vehiclePlate: "",
    vehicleCapacity: "",
    vehicleType: "",
    vehicleModel: "",
  });

  return (
    <div>
      <captainDataContext.Provider value={{ captain, setcaptain }}>
        {children}
      </captainDataContext.Provider>
    </div>
  );
}

export default CaptainContext;
