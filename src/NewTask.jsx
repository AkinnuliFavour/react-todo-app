import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api/tasks";

const NewTask = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checked = false;
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = {
      id,
      title,
      datetime: date,
      body: description,
      checked,
    };
    try {
      const response = await api.post("/tasks", newTask);
      const allTasks = [...tasks, response.data];
      setTasks(allTasks);
      setTitle("");
      setDate("");
      setDescription("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <main className="flex flex-col items-center justify-center w-screen rounded-md place-content-center">
      <header className="p-4 bg-white rounded-t-md md:w-7/12 lg:w-6/12 xl:w-4/12 2xl:w-4/12 w-full">
        <h2 className="text-gray-600 text-lg font-bold text-center">
          New Task
        </h2>
      </header>
      <form
        action=""
        className="flex flex-col bg-cyan-200 md:w-7/12 lg:w-6/12 xl:w-4/12 2xl:w-4/12 w-full p-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name=""
          id="title"
          className="border p-1 rounded-md mt-1 mb-2 focus:outline-none focus:border-cyan-400 shadow-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength="8"
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="text"
          name=""
          id="date"
          className="border p-1 rounded-md mt-1 mb-2 focus:outline-none focus:border-cyan-400 shadow-sm"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          maxLength="15"
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name=""
          id="description"
          className="border p-1 rounded-md mt-1 mb-2 focus:outline-none focus:border-cyan-400 shadow-sm"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength="40"
          required
        />

        <button type="submit" className="mt-4 bg-cyan-400 rounded-md p-2">
          Create New Task
        </button>
      </form>
      <footer className="rounded-b-md bg-white h-8 p-6 md:w-7/12 lg:w-6/12 xl:w-4/12 2xl:w-4/12 w-full"></footer>
    </main>
  );
};

export default NewTask;
