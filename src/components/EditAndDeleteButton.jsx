import React from "react";
import api from "../api/tasks";
import { Link } from "react-router-dom";

const EditAndDeleteButton = ({ id, tasks, setTasks }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/tasks/${id}`);
      const listItems = tasks.filter((task) => task.id !== id);
      setTasks(listItems);
    } catch {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <div className="absolute">
      <Link to={`edit-task/${id}`}>
        <input
          type="button"
          value="Edit"
          className="mr-0.5 text-cyan-400 hover:text-cyan-600 hover:underline hover:decoration-cyan-600"
        />
      </Link>
      <span>|</span>
      <input
        type="button"
        value="Delete"
        className="ml-0.5 text-red-400 hover:text-red-600 hover:underline hover:decoration-red-600"
        onClick={() => handleDelete()}
      />
    </div>
  );
};

export default EditAndDeleteButton;
