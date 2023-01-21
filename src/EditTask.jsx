import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "./api/tasks";

const EditTask = ({ tasks, setTasks }) => {
  const [editTitle, setEditTitle] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const { id } = useParams();
  const task = tasks.find((task) => task.id.toString() === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (task) {
      setEditTitle(task.title);
      setEditDate(task.datetime);
      setEditDescription(task.body);
    }
  }, [task, setEditTitle, setEditDate, setEditDescription]);

  const handleEdit = async (id) => {
    const checked = false;
    const updatedTask = {
      id,
      title: editTitle,
      datetime: editDate,
      body: editDescription,
      checked,
    };
    try {
      const response = await api.put(`/tasks/${id}`, updatedTask);
      const editedTask = await tasks.map((task) =>
        task.id === id ? { ...response.data } : task
      );
      setTasks(editedTask);
      setEditTitle("");
      setEditDate("");
      setEditDescription("");

      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen rounded-md place-content-center">
      <header className="p-4 bg-white rounded-t-md md:w-7/12 lg:w-6/12 xl:w-4/12 2xl:w-4/12 w-full">
        <h2 className="text-gray-600 text-lg font-bold text-center">
          Edit Task
        </h2>
      </header>
      <form
        className="flex flex-col bg-cyan-200 md:w-7/12 lg:w-6/12 xl:w-4/12 2xl:w-4/12 w-full p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name=""
          id="title"
          className="border p-1 rounded-md mt-1 mb-2 focus:outline-none focus:border-cyan-400 shadow-sm"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="text"
          name=""
          id="date"
          className="border p-1 rounded-md mt-1 mb-2 focus:outline-none focus:border-cyan-400 shadow-sm"
          value={editDate}
          onChange={(e) => setEditDate(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name=""
          id="description"
          className="border p-1 rounded-md mt-1 mb-2 focus:outline-none focus:border-cyan-400 shadow-sm"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          required
        />

        <button
          type="submit"
          onClick={() => handleEdit(task.id)}
          className="mt-4 bg-cyan-400 rounded-md p-2"
        >
          Edit Task
        </button>
      </form>
      <footer className="rounded-b-md bg-white h-8 p-6 md:w-7/12 lg:w-6/12 xl:w-4/12 2xl:w-4/12 w-full"></footer>
    </main>
  );
};

export default EditTask;
