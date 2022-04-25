import { useState } from "react";
import { createContext } from "react";

export const UserToken = createContext();

export default function UserLoginProvider({ children }) {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || false
  );

  function setAndPersistToken(token) {
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  }

  function logout() {
    localStorage.clear();
    setToken(false);
  }

  return (
    <UserToken.Provider value={{ token, logout, setAndPersistToken }}>
      {children}
    </UserToken.Provider>
  );
}
