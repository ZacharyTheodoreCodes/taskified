import React, { useState, useRef, useEffect } from "react";
import { MdDelete, MdModeEdit, MdOutlineCheck } from "react-icons/md";
import { Task } from "../model";

const SingleTask: React.FC<{
  index: number;
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}> = ({ index, task, tasks, setTasks }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.name);

  const handleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isFinished: !task.isFinished } : task
      )
    );
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => (task.id == id ? { ...task, name: editTask } : task))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <>
      <div className="bg-[#f9fafb] rounded-lg p-3 my-2 flex items-center justify-between shadow-md transition duration-150 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">
        <form
          className="w-full"
          action=""
          onSubmit={(e) => handleEdit(e, task.id)}
        >
          {edit ? (
            <input
              className="w-full pl-1 font-semibold text-[20px] text-[#6b7280] "
              type="text"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
              ref={inputRef}
            />
          ) : (
            <p
              className={`font-semibold text-[20px] ${
                task.isFinished ? "line-through" : ""
              }`}
            >
              {task.name}
            </p>
          )}
        </form>

        <div className="flex gap-2 text-[25px] cursor-pointer">
          <span
            onClick={() => {
              if (!edit && !task.isFinished) {
                setEdit(!edit);
              }
            }}
          >
            <MdModeEdit />
          </span>
          <span onClick={() => handleDelete(task.id)}>
            <MdDelete />
          </span>
          <span onClick={() => handleDone(task.id)}>
            <MdOutlineCheck />
          </span>
        </div>
      </div>
    </>
  );
};
export default SingleTask;
