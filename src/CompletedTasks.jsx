import React from "react";
import Task from "./components/Task";

const CompletedTasks = ({ tasks, setTasks }) => {
  const completedTasks = tasks.filter((task) => task.checked === true);
  return (
    <main className="h-5/6 min-h-full bg-cyan-200 flex items-center justify-start grow flex-col scroll-auto w-full lg:w-6/12 xl:w-5/12 2xl:w-4/12 overflow-y-auto">
      {completedTasks.length ? (
        completedTasks.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))
      ) : (
        <p className="text-center text-gray-700 m-auto">No Completed Tasks</p>
      )}
    </main>
  );
};

export default CompletedTasks;
