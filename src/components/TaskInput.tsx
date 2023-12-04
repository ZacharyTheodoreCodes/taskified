const TaskInput = () => {
  return (
    <>
      <div className="w-[60%] flex flex-col relative">
        <form action="">
          <input
            type="text"
            className="pl-2 w-[90%] rounded-lg py-4 text-xl transition duration-200 shadow-inner "
            placeholder="Write a task"
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
export default TaskInput;
