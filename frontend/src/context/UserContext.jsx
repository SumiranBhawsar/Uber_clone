/* eslint-disable react-refresh/only-export-components */
// /* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const UserDataContext = createContext();

function UserContext({ children }) {
  const [user, setuser] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  return (
    <div>
      <UserDataContext.Provider value={{ user, setuser }}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
}

export default UserContext;
