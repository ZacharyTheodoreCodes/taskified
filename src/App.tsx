import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import { Task } from "./model";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now(), name: task, isFinished: false }]);
      setTask("");
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center font-raleway bg-gradient-to-r from-[#FFF78A] to-[#fee2e2]">
        <h1 className="text-[50px] text-[#71717a] tracking-wider my-10 font-tilt-warp">
          Taskified 📝
        </h1>
        <TaskInput task={task} setTask={setTask} handleAdd={handleAdd} />
      </div>
    </>
  );
};

export default App;
