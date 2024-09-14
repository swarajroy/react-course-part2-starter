import React, { ReactNode } from "react";
import AuthContext from "../state-management/contexts/authContext";
import authReducer from "../state-management/reducers/userReducer";
import { useReducer } from "react";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
