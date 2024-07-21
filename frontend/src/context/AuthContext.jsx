import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () =>{
    useContext(AuthContext);
}

export const AuthContextProvider = ({ Children }) => {
  const { authUser, setAuthUser } = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {Children}
    </AuthContext.Provider>
  );
};
