import { Task } from "../model";
import SingleTask from "./SingleTask";
import { MdDelete, MdModeEdit, MdOutlineCheck } from "react-icons/md";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({ tasks, setTasks }: Props) => {
  
  return (
    <>
      <div className="w-[60%] grid grid-cols-2 gap-2 justify-between items-start">
        <div className="bg-[#6DB9EF] rounded-lg p-5">
          <p className="text-[24px] text-white font-bold mb-4">Ongoing Task</p>
          {tasks?.map((task, index) => (
            <SingleTask
              index={index}
              task={task}
              key={task.id}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </div>
        <div className="bg-[#FF8F8F] rounded-lg p-5">
          <p className="text-[24px] text-white font-bold mb-4">
            Completed Task
          </p>
          <div className="bg-[#FFE382] rounded-lg p-3 my-2 flex items-center justify-between shadow-md ">
            <form action="">
              <p className="font-semibold text-[20px]">Tidur</p>
            </form>

            <div className="flex gap-2 text-[25px] cursor-pointer">
              <span className="">
                <MdDelete />
              </span>
              <span className="">
                <MdOutlineCheck />
              </span>
              <span className="">
                <MdModeEdit />
              </span>
            </div>
          </div>
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
