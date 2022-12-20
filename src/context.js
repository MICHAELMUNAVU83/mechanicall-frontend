import React, { createContext, useState } from "react";
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));

  return (
    <UserContext.Provider
      value={{ storedToken, setStoredToken }}
    >
      {children}
    </UserContext.Provider>
  );
}
export const UserConsumer = UserContext.Consumer;
