import { createContext, useEffect, useState } from "react";
import React from "react";


const UserContext = createContext({});
const UserContextProvider = (props) => {
  const [showUserInfo, setShowUSerInfo] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
     
  });
  return (
    <UserContext.Provider
      value={{ showUserInfo, setShowUSerInfo, userInfo, setUserInfo }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export { UserContextProvider, UserContext };
