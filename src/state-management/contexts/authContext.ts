import { AuthAction } from "../reducers/userReducer";
import React from "react";

interface AuthContext {
  user: string;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContext>({} as AuthContext);

export default AuthContext;
