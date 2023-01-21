import React from "react";
import Task from "./components/Task";

const AllTasks = ({ tasks, setTasks }) => {
  return (
    <main className="h-5/6 min-h-full bg-cyan-200 flex items-center justify-start grow flex-col scroll-auto w-screen lg:w-6/12 xl:w-5/12 2xl:w-4/12 overflow-y-auto relative">
      {tasks.length ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))
      ) : (
        <p className="text-center text-gray-700 m-auto">No Tasks Today!</p>
      )}
    </main>
  );
};

export default AllTasks;
