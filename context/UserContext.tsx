import React, { createContext, useState } from "react";

export const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: any) => {

  const [phone, setPhone] = useState("");

  return (
    <UserContext.Provider value={{ phone, setPhone }}>
      {children}
    </UserContext.Provider>
  );
};