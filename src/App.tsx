import "./App.css";

import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";

import { Counter } from "./state-management/counter";

function App() {
  return (
    <>
      <Counter />
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;
