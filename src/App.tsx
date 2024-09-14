import { useReducer } from "react";
import "./App.css";
import tasksReducer from "./state-management/reducers/tasksReducer";

import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <>
      <AuthProvider>
        <TasksContext.Provider value={{ tasks, dispatch: dispatch }}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
