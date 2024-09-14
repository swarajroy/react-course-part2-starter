import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import react from "react";
import { useReducer } from "react";
import tasksReducer from "./state-management/reducers/tasksReducer";
import authReducer from "./state-management/reducers/userReducer";

import TasksContext from "./state-management/contexts/tasksContext";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");
  return (
    <>
      <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
