import React from "react";
import Task from "./components/Task";

const PendingTasks = ({ tasks, setTasks }) => {
  const pendingTasks = tasks.filter((task) => task.checked !== true);
  return (
    <main className="h-96 min-h-full bg-cyan-200 flex items-center justify-start grow flex-col scroll-auto w-full lg:w-6/12 xl:w-5/12 2xl:w-4/12 overflow-y-auto relative">
      {pendingTasks.length ? (
        pendingTasks.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))
      ) : (
        <p className="text-center text-gray-700 m-auto">No Pending Tasks!</p>
      )}
    </main>
  );
};

export default PendingTasks;
