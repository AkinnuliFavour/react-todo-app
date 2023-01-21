import Container from "./Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import api from "./api/tasks";
import NewTask from "./NewTask";
import EditTask from "./EditTask";
import AllTasks from "./AllTasks";
import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/tasks");
        setTasks(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route
              index
              element={<AllTasks tasks={tasks} setTasks={setTasks} />}
            />

            <Route
              path="/pending-tasks"
              element={<PendingTasks tasks={tasks} setTasks={setTasks} />}
            />

            <Route
              path="/completed-tasks"
              element={<CompletedTasks tasks={tasks} setTasks={setTasks} />}
            />
          </Route>

          <Route
            path="/add-task"
            element={<NewTask tasks={tasks} setTasks={setTasks} />}
          />
          <Route
            path="edit-task/:id"
            element={<EditTask tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
