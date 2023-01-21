import React from "react";
import EditAndDeleteButton from "./EditAndDeleteButton";
import api from "../api/tasks";

const Task = ({ task, tasks, setTasks }) => {
  const handleChange = async (id) => {
    const listItems = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(listItems);

    const myItem = await listItems.find((item) => item.id === id);
    const response = await api.patch(`/tasks/${id}`, {
      checked: myItem.checked,
    });
    console.log(response.data);
  };

  return (
    <section className="w-11/12 bg-white rounded-md mt-4 mb-2 p-2 relative scroll-smooth">
      <div className="flex justify-around gap-44 mb-2">
        <p
          className={
            task.checked
              ? "w-full font-bold text-gray-700 line-through"
              : "w-full font-bold text-gray-700"
          }
        >
          {task.title}
        </p>
        <EditAndDeleteButton id={task.id} tasks={tasks} setTasks={setTasks} />
        <p
          className={
            task.checked ? "text-gray-700 line-through" : "text-gray-700"
          }
        >
          {task.date}
        </p>
      </div>
      <div className="flex justify-around gap-40">
        <p
          className={
            task.checked
              ? "w-full text-gray-700 line-through"
              : "w-full text-gray-700"
          }
        >
          {task.body}
        </p>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="completed" className="absolute -left-96">
            Completed Tack
          </label>
          <input
            type="checkbox"
            name=""
            id="completed"
            checked={task.checked}
            onChange={() => handleChange(task.id)}
          />
        </form>
      </div>
    </section>
  );
};

export default Task;
