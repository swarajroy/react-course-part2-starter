import { useContext } from "react";
import LoginStatus from "./LoginStatus";
import TasksContext from "./contexts/tasksContext";
import AuthContext from "./contexts/authContext";
import authReducer from "./reducers/userReducer";
import { useReducer } from "react";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
