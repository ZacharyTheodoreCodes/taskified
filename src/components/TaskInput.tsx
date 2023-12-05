interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const TaskInput = ({ task, setTask, handleAdd }: Props) => {
  return (
    <>
      <div className="w-[60%] flex flex-col relative mb-20">
        <form action="" onSubmit={handleAdd}>
          <input
            type="text"
            className="pl-2 w-[90%] rounded-lg py-4 text-xl transition duration-200 shadow-inner "
            placeholder="Write a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="submit"
            className="h-full w-[10%] text-center text-[#737373] text-xl font-bold rounded-lg absolute  bg-[#FFAD84] hover:opacity-70"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

{
  /* <div className="input w-95p relative flex items-center">
        <input
          className="input__box w-full rounded-full px-8 py-6 text-2xl transition duration-200 border-none focus:outline-none shadow-inner relative"
          type="text"
          placeholder="Your Input"
        />
        <button className="right-0 input_submit absolute w-12 h-12 m-3 rounded-full border-none text-lg bg-blue-600 text-white transition duration-200 shadow  z-10">
          Add
        </button>
      </div> */
}

export default TaskInput;
