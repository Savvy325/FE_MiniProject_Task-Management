import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationGuard from "./components/AuthenticationGuard";
import OrderForm from "./components/OrderForm";
import { Task } from "./interfaces/CandleOrder";
import HomePage from "./views/HomePage";
import CandleOrderList from "./components/CandleOrderList";

const App: React.FC = () => {
  const { isLoading } = useAuth0();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      setTaskToEdit(task);
      navigate(`/task/${id}/edit`);
    }
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleSubmit = (task: Task) => {
    setTasks((prevTasks) => {
      const taskIndex = prevTasks.findIndex((t) => t.id === task.id);
      if (taskIndex > -1) {
        const newTasks = [...prevTasks];
        newTasks[taskIndex] = task;
        return newTasks;
      } else {
        return [...prevTasks, task];
      }
    });
    setTaskToEdit(null);
    navigate("/tasks");
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/task/new"
          element={
            <AuthenticationGuard
              component={() => <OrderForm onSubmit={handleSubmit} />}
            />
          }
        />
        <Route
          path="/task/:id/edit"
          element={
            <AuthenticationGuard
              component={() => (
                <OrderForm onSubmit={handleSubmit} task={taskToEdit} />
              )}
            />
          }
        />
        <Route
          path="/tasks"
          element={
            <CandleOrderList
              tasks={tasks}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
