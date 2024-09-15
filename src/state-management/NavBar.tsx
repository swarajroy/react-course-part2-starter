import { useContext } from "react";
import LoginStatus from "./LoginStatus";
import AuthContext from "./contexts/authContext";
import TasksContext from "./tasks/tasksContext";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const { user, dispatch } = useContext(AuthContext);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <AuthContext.Provider value={{ user, dispatch }}>
        <LoginStatus />
      </AuthContext.Provider>
    </nav>
  );
};

export default NavBar;
