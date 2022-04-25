import { useState } from "react";
import { createContext } from "react";

export const UserToken = createContext();

export default function UserLoginProvider({ children }) {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || {}
  );

  function setAndPersistToken(token) {
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  }

  return (
    <UserToken.Provider value={{ token, setAndPersistToken }}>
      {children}
    </UserToken.Provider>
  );
}
