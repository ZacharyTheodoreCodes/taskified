import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import { Task } from "./model";
import TaskList from "./components/TaskList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [FinishedTasks, setFinishedTasks] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now(), name: task, isFinished: false }]);
      setTask("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    console.log(result);

    if (
      !destination ||
      (destination.droppableId == source.droppableId &&
        destination.index == source.index)
    ) {
      return;
    }

    let add;
    let ongoing = tasks;
    let finished = FinishedTasks;
    //source logic
    if (source.droppableId == "ongoingTask") {
      add = ongoing[source.index];
      ongoing.splice(source.index, 1);
    } else {
      add = finished[source.index];
      finished.splice(source.index, 1);
    }

    //destination logic
    if (destination.droppableId == "ongoingTask") {
      ongoing.splice(destination.index, 0, add);
    } else {
      finished.splice(destination.index, 0, add);
    }

    setFinishedTasks(finished);
    setTasks(ongoing);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="min-h-screen flex flex-col items-center font-raleway bg-gradient-to-r from-[#FFF78A] to-[#fee2e2]">
        <h1 className="text-[50px] text-[#71717a] tracking-wider my-10 font-tilt-warp">
          Taskified 📝
        </h1>
        <TaskInput task={task} setTask={setTask} handleAdd={handleAdd} />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          FinishedTasks={FinishedTasks}
          setFinishedTasks={setFinishedTasks}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
