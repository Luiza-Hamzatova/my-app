import React from "react";
import TaskOne from "./components/tastOne/taskOne";
import TaskTwo from "./components/taskTwo/taskTwo";
import TaskThree from "./components/taskThree/taskThre";
import TaskFour from "./components/taskFour/taskFour";

function App() {
  return (
    <div className="App">
      <TaskOne />
      <TaskTwo />
      <TaskThree/>
      <TaskFour/>
    </div>
  );
}

export default App;
