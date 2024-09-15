import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import AuthContext from "./auth/authContext";
import TasksContext from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { counter } = useCounterStore();
  const { user, dispatch } = useContext(AuthContext);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <AuthContext.Provider value={{ user, dispatch }}>
        <LoginStatus />
      </AuthContext.Provider>
    </nav>
  );
};

export default NavBar;
