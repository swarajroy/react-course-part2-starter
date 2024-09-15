import React from "react";
import { AuthAction } from "./AuthProvider";

interface AuthContext {
  user: string;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContext>({} as AuthContext);

export default AuthContext;
