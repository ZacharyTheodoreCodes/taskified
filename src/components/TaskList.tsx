import { Task } from "../model";
import SingleTask from "./SingleTask";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({ tasks, setTasks }: Props) => {
  //console.log(tasks);
  return (
    <>
      <div className="w-[60%] grid grid-cols-2 gap-2 justify-between items-start">
        <div>
          <span>Ongoing Task</span>
        </div>
        <div>
          <span>Completed Task</span>
        </div>
        {/* <div>
          {tasks?.map((task, index) => (
            <SingleTask
              index={index}
              task={task}
              key={task.id}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default TaskList;
