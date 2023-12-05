import React, { useState } from "react";
import { MdDelete, MdModeEdit, MdOutlineCheck } from "react-icons/md";
import { Task } from "../model";

const SingleTask: React.FC<{
  index: number;
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}> = ({ index, task, tasks, setTasks }) => {
  return (
    <>
      <div className="flex items-center bg-zinc-300">
        <form action="">
          <span>{task.name}</span>
          <div className="flex ">
            <span className="ml-[10px] text-[25px] cursor-pointer">
              <MdDelete />
            </span>
            <span className="ml-[10px] text-[25px] cursor-pointer">
              <MdOutlineCheck />
            </span>
            <span className="ml-[10px] text-[25px] cursor-pointer">
              <MdModeEdit />
            </span>
          </div>
        </form>
      </div>
    </>
  );
};
export default SingleTask;
