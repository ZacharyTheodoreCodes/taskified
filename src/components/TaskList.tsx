import { Droppable } from "react-beautiful-dnd";
import { Task } from "../model";
import SingleTask from "./SingleTask";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  FinishedTasks: Task[];
  setFinishedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({
  tasks,
  setTasks,
  FinishedTasks,
  setFinishedTasks,
}: Props) => {
  
  return (
    <>
      <div className="w-[60%] grid grid-cols-2 gap-2 justify-between items-start">
        <Droppable droppableId="ongoingTask">
          {(provided) => (
            <div
              className="bg-[#6DB9EF] rounded-lg p-5"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <p className="text-[24px] text-white font-bold mb-4">
                Ongoing Task
              </p>
              {tasks?.map((task, index) => (
                <SingleTask
                  index={index}
                  task={task}
                  key={task.id}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="completedTask">
          {(provided) => (
            <div
              className="bg-[#FF8F8F] rounded-lg p-5"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <p className="text-[24px] text-white font-bold mb-4">
                Finished Task
              </p>
              {FinishedTasks?.map((task, index) => (
                <SingleTask
                  index={index}
                  task={task}
                  key={task.id}
                  tasks={FinishedTasks}
                  setTasks={setFinishedTasks}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
};

export default TaskList;
