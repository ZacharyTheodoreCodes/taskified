import { useState } from "react";
import TaskInput from "./components/TaskInput";

// function App(): React.FC {
//   return;
//   <>
//     <h1 className="text-[30px]">Hello World</h1>
//   </>;
// }

const App: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center font-raleway bg-gradient-to-r from-[#FFF78A] to-[#fee2e2]">
        <h1 className="text-[50px] text-[#71717a] tracking-wider my-10 font-tilt-warp">
          Taskified 📝
        </h1>
        <TaskInput />
      </div>
    </>
  );
};

export default App;
